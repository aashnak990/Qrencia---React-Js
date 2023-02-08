import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import classes from './Competitions.module.css'
import { useState, useEffect, useMemo } from 'react';
import CompetitionsList from '../components/CompetitionsList';

function CompetitionsPage() {
  const competitions = useLoaderData();
  const [competitonsList, setCompetitonsList] = useState([]);

  // Add default value on page load
  useEffect(() => {
    setCompetitonsList(competitions);
  }, [competitions]);
  const [selectedMode, setSelectedMode] = useState();

  var filteredList = useMemo(getFilteredList, [selectedMode, competitonsList]);
  function handleModeChange(event) {
    setSelectedMode(event.target.value);
  }

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedMode is null
    if (!selectedMode) {
      return competitonsList;
    }
    return competitonsList.filter((item) => item.mode === selectedMode);
  }
  return (
    <>
      <div className={classes.filterContainer}>
        <div>
          <select className={classes.selectBox}
            name="category-list"
            id="category-list"
            onChange={handleModeChange}
          >
            <option value="">Filter By Mode</option>
            <option value="">All</option>
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
          </select>
        </div>
      </div>
      <h1 className={classes.headings}>Today's Competitions</h1>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={filteredList}>
          {(loadedCompetitions) => <CompetitionsList competitions={loadedCompetitions} />}
        </Await>
      </Suspense>
    </>
  );
}

export default CompetitionsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  const responseData = await response.json();
  return responseData.events;
}
