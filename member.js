function skillsMember() {
  // Skills
  const skills = [
    { name: 'HTML', level: 9 },
    { name: 'CSS', level: 8 },
    { name: 'JavaScript', level: 7 },
    { name: 'React', level: 6 },
  ];

  // Render
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill.name}>
            {skill.name}: {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
}