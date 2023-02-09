import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import classes from './Competitions.module.css'

import CompetitionsList from '../components/CompetitionsList';

function CompetitionsPage() {
  const competitions = useLoaderData();
  
  return (
    <>
      <h1 className={classes.headings}>Today's Competitions</h1>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={competitions}>
        <CompetitionsList competitions={competitions} />
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
