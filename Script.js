document.getElementById('dob-day').addEventListener('input', function() {
  if (this.value.length === 2) {
    const day = parseInt(this.value);
    if (day >= 1 && day <= 31) {
      document.getElementById('dob-month').focus();
    } else {
      showAlert("Please enter a valid day between 1 and 31.");
      this.value = '';
    }
  }
});
// JavaScript event listeners and validation functions continue...
