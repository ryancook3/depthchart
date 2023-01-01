import { useEffect, useState } from "react";
import React from "react";

const Sidebar = () => {
  const [name, updateTeam] = useState("");
  const [teams, setTeam] = useState([]);

  useEffect(() => {
    requestTeam();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestTeam() {
    const res = await fetch(`https://statsapi.web.nhl.com/api/v1/teams`);
    const json = await res.json();

    setTeam(json.teams);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestTeam();
        }}
      >
        <label htmlFor="team">
          Select Team
          <select
            id="name"
            value={name}
            onChange={(e) => {
              updateTeam(e.target.value);
            }}
          >
            <option />
            {teams.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
        <label htmlFor="forwardsSelect">
          Forwards
          <select></select>
        </label>
        <label htmlFor="defenseSelect">
          Defense
          <select></select>
        </label>
        <label htmlFor="goalieSelect">
          Goalie
          <select></select>
        </label>
      </form>
    </div>
  );
};

export default Sidebar;
