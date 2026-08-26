import { useMemo, useState } from 'react';
import { landingPage } from '../data/dashboardContent';
import GlossaryText from './GlossaryText';
import styles from './BenefitsBoard.module.css';

// The in-kind / creative benefits block is rendered by Orientation, which owns
// the surrounding section — keeping it here too rendered it twice.
const { benefitCategories, benefitFilters } = landingPage;

// A category matches when, for every bucket the user has selected in, it carries
// at least one of the selected tags. Buckets with no selection are ignored.
function matchesFilters(category, selected) {
  return benefitFilters.every((bucket) => {
    const chosen = selected[bucket.id];
    if (!chosen || chosen.length === 0) return true;
    return chosen.some((tag) => category[bucket.id]?.includes(tag));
  });
}

export default function BenefitsBoard() {
  const [selected, setSelected] = useState({ horizon: [], type: [], recipient: [] });

  const toggle = (bucketId, optionId) => {
    setSelected((prev) => {
      const current = prev[bucketId];
      return {
        ...prev,
        [bucketId]: current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : [...current, optionId],
      };
    });
  };

  const clearAll = () => setSelected({ horizon: [], type: [], recipient: [] });

  const activeCount = Object.values(selected).flat().length;

  const results = useMemo(
    () => benefitCategories.map((category) => ({
      category,
      matched: matchesFilters(category, selected),
    })),
    [selected],
  );

  const matchCount = results.filter((r) => r.matched).length;

  return (
    <div className={styles.board}>
      <div className={styles.filterPanel}>
        <div className={styles.filterPanelTop}>
          <div>
            <p className={styles.filterPanelLabel}>Filter the benefits</p>
            <p className={styles.filterPanelHint}>
              Select any combination below to highlight the benefit categories that apply. Hover or
              focus a filter to see what it means.
            </p>
          </div>
          {activeCount > 0 && (
            <button type="button" className={styles.clearBtn} onClick={clearAll}>
              Clear filters ({activeCount})
            </button>
          )}
        </div>

        <div className={styles.filterBuckets}>
          {benefitFilters.map((bucket) => (
            <fieldset key={bucket.id} className={styles.bucket}>
              <legend className={styles.bucketLabel}>{bucket.label}</legend>
              <p className={styles.bucketHint}>{bucket.hint}</p>
              <div className={styles.bucketOptions}>
                {bucket.options.map((option) => {
                  const isOn = selected[bucket.id].includes(option.id);
                  return (
                    <span key={option.id} className={styles.chipWrap}>
                      <button
                        type="button"
                        className={isOn ? styles.chipActive : styles.chip}
                        onClick={() => toggle(bucket.id, option.id)}
                        aria-pressed={isOn}
                        aria-describedby={`def-${bucket.id}-${option.id}`}
                      >
                        {option.label}
                      </button>
                      <span
                        role="tooltip"
                        id={`def-${bucket.id}-${option.id}`}
                        className={styles.tooltip}
                      >
                        <strong>{option.label}</strong>
                        {option.definition}
                      </span>
                    </span>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>
      </div>

      <p className={styles.resultCount} aria-live="polite">
        {activeCount === 0
          ? `Showing all ${benefitCategories.length} benefit categories`
          : `${matchCount} of ${benefitCategories.length} categories match your filters`}
      </p>

      <div className={styles.benefitGrid}>
        {results.map(({ category, matched }) => (
          <article
            key={category.label}
            className={`${styles.benefitCard} ${matched ? styles.matched : styles.faded}`}
            aria-hidden={activeCount > 0 && !matched ? 'true' : undefined}
          >
            <h3>{category.label}</h3>
            <p><GlossaryText>{category.tooltip}</GlossaryText></p>
            <ul className={styles.tagRow}>
              {benefitFilters.flatMap((bucket) =>
                (category[bucket.id] || []).map((tagId) => {
                  const option = bucket.options.find((o) => o.id === tagId);
                  if (!option) return null;
                  return (
                    <li key={`${bucket.id}-${tagId}`} className={styles[`tag_${bucket.id}`]}>
                      {option.label}
                    </li>
                  );
                }),
              )}
            </ul>
          </article>
        ))}
      </div>

    </div>
  );
}
