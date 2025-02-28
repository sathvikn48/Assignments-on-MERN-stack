class SI {
    constructor(principal, roi, time) {
        this.principal = principal;
        this.roi = roi;
        this.time = time;
    }

    // Method to calculate Simple Interest
    calculate() {
        return (this.principal * this.roi * this.time) / 100;
    }

    // Getter methods
    getPrincipal() {
        return this.principal;
    }
    
    getROI() {
        return this.roi;
    }
    
    getTime() {
        return this.time;
    }

    // Setter methods
    setPrincipal(principal) {
        this.principal = principal;
    }
    
    setROI(roi) {
        this.roi = roi;
    }
    
    setTime(time) {
        this.time = time;
    }
}

// Step 1: Create the first object and return Simple Interest
let si1 = new SI(20000, 5, 2); // Principal = 1000, ROI = 5%, Time = 2 years
console.log("Initial Simple Interest :", si1.calculate());

// Step 2: Demonstrate getter and setter methods
console.log("Initial ROI:", si1.getROI());
si1.setROI(3);
console.log("Updated ROI:", si1.getROI());

// Step 3: Change time to 3 years and ROI to 3% and return SI
si1.setTime(3);
console.log("Updated Simple Interest:", si1.calculate());
