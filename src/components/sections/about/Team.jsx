import { team } from '../../../data';
import { Photo } from '../../ui/Photo';
import { SectionHead } from '../../ui/SectionHead';

export function Team() {
  const people = team.map(([name, role, bio, image], i) => ({
    name,
    role,
    bio,
    image: image || 'founder-placeholder.webp',
    id: `founder-${i + 1}`,
  }));

  return (
    <section className="section team-section" data-source="C33" id="team">
      <SectionHead label="Team" title="Team" />
      <div className="team-list team-grid">
        {people.map(({ name, role, bio, image, id }) => (
          <article key={id} id={id} className="founder-profile">
            <Photo src={image} alt={`Portrait of ${name}`} />
            <div className="founder-copy">
              <h3>{name}</h3>
              <p>{role}</p>
              {bio && <p>{bio}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}