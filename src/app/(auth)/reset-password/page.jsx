import React, { Suspense } from "react";
import ResetPasswordForm from "./reset-password-form";

const ResetPasswordPage = () => {
  return (
    <div className="container mx-auto">
      <h2>Reset Password</h2>

      <Suspense fallback="loading">
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
};

export default ResetPasswordPage;
