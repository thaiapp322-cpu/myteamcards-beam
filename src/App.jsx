import React from "react";
import MemberCard from "./MemberCard.jsx";
function App() {
  const teamMembers = [
    { name: "สมหญิง", role: "Frontend Developer", avatar: "girl.jpg" },
    { name: "ส้มจี๊ด", role: "Backend Developer", avatar: "girl 2.jpg" },
    { name: "นุ้ย", role: "UI/UX Designer", avatar: "girl 3.jpg" },
  ];
  return (
    <div>
      <h1 className='topic'>CodeVerse Studio</h1>
      <div className='container'>
        {teamMembers.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </div>
  );
}

export default App;
