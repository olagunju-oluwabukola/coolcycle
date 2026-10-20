import React from 'react';
import { Label } from './Label';
import { asset } from '../../lib/assets';

export function PageHero({ label, title, description, src, source, action, boxed = false }) {
  return (
    <section
      className={'page-hero ' + (src ? 'image-hero' + (boxed ? ' boxed-hero' : '') : 'text-hero')}
      data-source={source}
    >
      {src && (
        <img
          className="hero-photo"
          src={asset(src)}
          alt="Illustrative CoolCycle cooling concept"
          fetchPriority="high"
        />
      )}
      <div className="page-hero-content">
        <Label>{label}</Label>
        <h1 aria-label={boxed ? title : undefined}>
          {boxed
            ? title.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  <span className="title-box">{word}</span>{' '}
                </React.Fragment>
              ))
            : title}
        </h1>
        {description && <p>{description}</p>}
        {action && <div className="actions">{action}</div>}
      </div>
    </section>
  );
}
