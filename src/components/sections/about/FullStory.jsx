import { story } from '../../../data';
import { Label } from '../../ui/Label';
import { Photo } from '../../ui/Photo';

export function FullStory() {
  return (
    <section className="section full-story" data-source="C24" id="story">
      <Label>Our Story</Label>
      <h2>Cold storage gives farmers something they rarely have: time.</h2>
      <div className="story-columns">
        {story.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <Photo
        src="engineering-story.webp"
        alt="Generated engineering scene of a CoolCycle team developing a solar cold-room system"
      />
      <div className="story-source">
        <span>World Bank (2016), AGRA (2023), IFDC and NIHORT (2024).</span>
      </div>
    </section>
  );
}
