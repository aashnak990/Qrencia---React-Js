import { useState } from 'react';
import { Form,Link,useSearchParams,useActionData,useNavigation} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <>
    <div className={classes.formContainer}>
    <Form method="post" className={classes.form}>
        <h1 className={classes.heading}>Login</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button disabled={isSubmitting}>{isSubmitting ? 'Loging in':'Login'}</button>
          
        </div>
        <div className={classes.errorMessage}>
        {data && data.errors && (<ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
            <li></li>
          </ul>)}
          
          {data && data.message && <p>{data.message}</p>}
        </div>
      </Form>
    </div>
      
    </>
  );
}

export default AuthForm;
