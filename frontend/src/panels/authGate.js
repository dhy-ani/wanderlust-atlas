// Full-app sign-in gate: blocks everything until a real account is signed in.
// Reuses the same JWT auth as group planning (auth.js) so "who's using the
// solo globe" and "who's in a group" are the same identity.
import { isSignedIn, getUser, login, signup, signOut } from '../auth.js';

export function initAuthGate({ onSignedIn }) {
  const gate = document.getElementById('authGate');
  const body = document.getElementById('authGateBody');
  const whoAmI = document.getElementById('whoAmI');

  function renderWhoAmI() {
    const user = getUser();
    whoAmI.innerHTML = user ? `${user.name} · <a id="signOutLink">sign out</a>` : '';
    const link = document.getElementById('signOutLink');
    if (link) link.onclick = () => { signOut(); location.reload(); };
  }

  function renderForm() {
    body.innerHTML = `
      <div class="negoCard">
        <h4>Sign in</h4>
        <input id="gateLoginEmail" type="email" placeholder="Email"/>
        <input id="gateLoginPassword" type="password" placeholder="Password"/>
        <button id="gateLoginBtn">Sign In</button>
      </div>
      <div class="negoCard">
        <h4>Create an account</h4>
        <input id="gateSignupName" placeholder="Your name"/>
        <input id="gateSignupEmail" type="email" placeholder="Email"/>
        <input id="gateSignupPassword" type="password" placeholder="Password (min 8 chars)"/>
        <button id="gateSignupBtn">Sign Up</button>
      </div>
      <div id="gateStatus" class="negoStatus" style="width:100%;"></div>`;

    document.getElementById('gateLoginBtn').onclick = async () => {
      const status = document.getElementById('gateStatus');
      try {
        await login(document.getElementById('gateLoginEmail').value.trim(), document.getElementById('gateLoginPassword').value);
        unlock();
      } catch (e) { status.textContent = `Failed: ${e.message}`; status.classList.add('err'); }
    };
    document.getElementById('gateSignupBtn').onclick = async () => {
      const status = document.getElementById('gateStatus');
      try {
        await signup(
          document.getElementById('gateSignupEmail').value.trim(),
          document.getElementById('gateSignupPassword').value,
          document.getElementById('gateSignupName').value.trim(),
        );
        unlock();
      } catch (e) { status.textContent = `Failed: ${e.message}`; status.classList.add('err'); }
    };
  }

  function unlock() {
    gate.classList.add('hidden');
    renderWhoAmI();
    onSignedIn();
  }

  if (isSignedIn()) {
    unlock();
  } else {
    renderForm();
  }
  return { renderWhoAmI };
}
