function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const maleChecked = document.getElementById('male').checked;
    const femaleChecked = document.getElementById('female').checked;
    const gender = maleChecked ? 'Male' : (femaleChecked ? 'Female' : '');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
  
    if (!firstName || !lastName || !dob || !country || !(maleChecked || femaleChecked) || !profession || !email || !mobile) {
      alert('Please fill in all the fields.');
      return;
    }
  
    const details = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Date of Birth: ${dob}
      Country: ${country}
      Gender: ${gender}
      Profession: ${profession}
      Email: ${email}
      Mobile Number: ${mobile}
    `;
  
    document.getElementById('surveyDetails').textContent = details;
    document.getElementById('popup').style.display = 'block';
  
    resetForm();
  }
  
  function resetForm() {
    document.getElementById('surveyForm').reset();
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  