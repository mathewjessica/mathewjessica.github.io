document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("introForm");
    const coursesDiv = document.getElementById("courses");
    const addCourseBtn = document.getElementById("addCourse");

    // Function to create and add a course input field
    function addCourseField() {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course-entry"); // Optional, for styling

        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.name = "courses[]";
        courseInput.placeholder = "Enter course name";
        courseInput.required = true;

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            coursesDiv.removeChild(courseDiv);
        });

        courseDiv.appendChild(courseInput);
        courseDiv.appendChild(deleteBtn);
        coursesDiv.appendChild(courseDiv);
    }

    // Attach event listener to the "Add Course" button
    addCourseBtn.addEventListener("click", addCourseField);

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Validate required fields
        const requiredFields = form.querySelectorAll("[required]");
        let allFieldsFilled = true;
        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                allFieldsFilled = false;
                alert(`${field.name} is required`);
            }
        });

        if (!allFieldsFilled) return;

        // Gather form data and display result
        const formData = new FormData(form);
        const result = document.createElement("div");
        result.innerHTML = `
            <h3>Your Introduction Page</h3>
            <p>Name: ${formData.get("name")}</p>
            <p>Mascot: ${formData.get("mascot")}</p>
            <img src="#" alt="${formData.get("imageCaption")}" id="uploadedImage">
            <p>Image Caption: ${formData.get("imageCaption")}</p>
            <p>Personal Background: ${formData.get("personalBackground")}</p>
            <p>Professional Background: ${formData.get("professionalBackground")}</p>
            <p>Academic Background: ${formData.get("academicBackground")}</p>
            <p>Background in Web Development: ${formData.get("webDevelopmentBackground")}</p>
            <p>Primary Computer Platform: ${formData.get("primaryPlatform")}</p>
            <p>Courses: ${formData.getAll("courses[]").join(", ")}</p>
            <p>Funny Thing: ${formData.get("funnyThing")}</p>
            <p>Anything Else: ${formData.get("anythingElse")}</p>
        `;

        // Replace form with result
        form.replaceWith(result);

        // Load uploaded image
        const uploadedImage = document.getElementById("uploadedImage");
        const file = formData.get("image");
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                uploadedImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle form reset
    form.addEventListener("reset", function () {
        coursesDiv.innerHTML = `
            <label>Courses currently taking:</label>
        `;
    });
});
