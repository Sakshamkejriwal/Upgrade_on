function calculateInvestment() {
  let principalAmount = document.getElementById('investmentAmount').value;
  let rateOfReturn = document.getElementById('returnRate').value;
  let years = document.getElementById('investmentYears').value;
  if (principalAmount == '' || rateOfReturn == '' || years == '') {
    alert('Please fill all fields!');
    return;
  }

  let finalAmount = principalAmount * Math.pow((1 + rateOfReturn / 100), years);
  
  let profit = finalAmount - principalAmount;
  
  let resultElement = document.getElementById('calculatorResult');
  
  if (resultElement) {
    resultElement.innerHTML = `
      <div style="background-color: #cef6e1ff; padding: 15px; border-radius: 8px; margin-top: 15px;">
        <h4 style="color: #065f46; margin: 0 0 10px 0;">Investment Results:</h4>
        <p style="margin: 5px 0;"><strong>Initial Amount:</strong> ₹${principalAmount.toLocaleString('en-IN')}</p>
        <p style="margin: 5px 0;"><strong>Final Amount:</strong> ₹${finalAmount.toLocaleString('en-IN', {maximumFractionDigits: 2})}</p>
        <p style="margin: 5px 0;"><strong>Profit Earned:</strong> ₹${profit.toLocaleString('en-IN', {maximumFractionDigits: 2})}</p>
      </div>
    `;
  }
}
const signupEmail = document.getElementById('signupEmail');
const signupEmailError = document.getElementById('signupEmailError');

if (signupEmail) {
    signupEmail.addEventListener("input", () => {
        signupEmailError.textContent =
            signupEmail.value.includes("@") ? "" : "Invalid Email";
    });
}

const contactEmail = document.getElementById('contactEmail');
const contactEmailError = document.getElementById('contactEmailError');

if (contactEmail) {
    contactEmailError.addEventListener("input", () => {
        contactEmailError.textContent =
            contactEmail.value.includes("@") ? "" : "Invalid Email";
    });
}

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

if (emailInput && emailError) {
  emailInput.addEventListener('input', function() {
    if (emailInput.value.includes('@')) {
      emailError.textContent = "";
      emailError.style.color = "#10b981";
    } else {
      emailError.textContent = "Invalid Email!";
      emailError.style.color = "#ef4444";
    }
  });
}

const welcomeModal = document.getElementById('welcomeModal');
const closeWelcomeBtn = document.getElementById('closeWelcome');

if (welcomeModal && closeWelcomeBtn) {
  setTimeout(() => {
    welcomeModal.style.display = 'flex';
  }, 1000);

  closeWelcomeBtn.addEventListener('click', function() {
    welcomeModal.style.display = 'none';
  });

  welcomeModal.addEventListener('click', function(event) {
    if (event.target === welcomeModal) {
      welcomeModal.style.display = 'none';
    }
  });
}