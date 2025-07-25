document.addEventListener('DOMContentLoaded', function() {
    // Handle form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            alert('Form submitted successfully! Thank you.');
            
            // Reset form
            this.reset();
            
            // For demonstration, we're just showing an alert
            // In a real application, you would send data to a server
        });
    });
    
    // Handle payment method selection
    const paymentMethod = document.getElementById('paymentMethod');
    if (paymentMethod) {
        paymentMethod.addEventListener('change', function() {
            const creditCardFields = document.getElementById('creditCardFields');
            if (this.value === 'credit-card') {
                creditCardFields.style.display = 'block';
            } else {
                creditCardFields.style.display = 'none';
            }
        });
    }
    
    // Handle graduation ceremony attendance
    const attendCeremony = document.querySelectorAll('input[name="attendCeremony"]');
    if (attendCeremony.length > 0) {
        attendCeremony.forEach(radio => {
            radio.addEventListener('change', function() {
                const ceremonyDetails = document.getElementById('ceremonyDetails');
                if (this.value === 'yes') {
                    ceremonyDetails.style.display = 'block';
                } else {
                    ceremonyDetails.style.display = 'none';
                }
            });
        });
    }
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});