
    const form = document.getElementById('personForm');

    form.addEventListener('submit', function(event) {
        

        const formData = getFormData();
        if (validateFormData(formData)) {
            console.log('Form Data Submitted:', formData);
            alert('Form submitted successfully!');
        }
    });

    function getFormData() {
        return {
            name: document.getElementById('name').value.trim(),
            age: document.getElementById('age').value.trim(),
            gender: document.getElementById('gender').value,
            dob: document.getElementById('dob').value,
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            city: document.getElementById('city').value.trim(),
            pincode: document.getElementById('pincode').value.trim()
        };
    }

    function validateFormData(formData) {
        if (!isValidEmail(formData.email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        if (!isValidPhone(formData.phone)) {
            alert('Please enter a valid phone number.');
            return false;
        }
        if (!isValidPincode(formData.pincode)) {
            alert('Please enter a valid pincode.');
            return false;
        }
        return true;
    }

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    function isValidPhone(phone) {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    }

    function isValidPincode(pincode) {
        const pincodePattern = /^[0-9]{6}$/;
        return pincodePattern.test(pincode);
    }

