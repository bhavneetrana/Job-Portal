const jobData = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Tech Corp',
        location: 'New York',
        salary: 60000,
        jobType: 'Full-time',
        experience: 'Mid-level',
        industry: 'IT',
        datePosted: '2024-10-01',
    },
    {
        id: 2,
        title: 'Data Analyst',
        company: 'DataCo',
        location: 'San Francisco',
        salary: 50000,
        jobType: 'Part-time',
        experience: 'Entry-level',
        industry: 'Finance',
        datePosted: '2024-09-25',
    },
    // Add more jobs as needed...
];

let filters = {
    jobType: '',
    location: '',
    salaryRange: '',
    experience: '',
    industry: '',
    sortBy: '',
};

// Event listeners for filter changes
document.getElementById('jobType').addEventListener('change', (e) => {
    filters.jobType = e.target.value;
});
document.getElementById('location').addEventListener('input', (e) => {
    filters.location = e.target.value;
});
document.getElementById('salaryRange').addEventListener('change', (e) => {
    filters.salaryRange = e.target.value;
});
document.getElementById('experience').addEventListener('change', (e) => {
    filters.experience = e.target.value;
});
document.getElementById('industry').addEventListener('change', (e) => {
    filters.industry = e.target.value;
});
document.getElementById('sortBy').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
});

function applyFilters() {
    let filteredJobs = jobData;

    // Apply filters
    if (filters.jobType) {
        filteredJobs = filteredJobs.filter((job) => job.jobType === filters.jobType);
    }

    if (filters.location) {
        filteredJobs = filteredJobs.filter((job) =>
            job.location.toLowerCase().includes(filters.location.toLowerCase())
        );
    }

    if (filters.salaryRange) {
        const [minSalary, maxSalary] = filters.salaryRange.split('-').map(Number);
        filteredJobs = filteredJobs.filter(
            (job) => job.salary >= minSalary && job.salary <= maxSalary
        );
    }

    if (filters.experience) {
        filteredJobs = filteredJobs.filter((job) => job.experience === filters.experience);
    }

    if (filters.industry) {
        filteredJobs = filteredJobs.filter((job) => job.industry === filters.industry);
    }

    // Apply sorting
    if (filters.sortBy) {
        filteredJobs.sort((a, b) => {
            if (filters.sortBy === 'datePosted') {
                return new Date(b.datePosted) - new Date(a.datePosted);
            } else if (filters.sortBy === 'salary') {
                return b.salary - a.salary;
            }
            return 0;
        });
    }

    // Display filtered and sorted jobs
    displayJobs(filteredJobs);
}

function displayJobs(jobs) {
    const jobListings = document.getElementById('jobListings');
    jobListings.innerHTML = '';

    jobs.forEach((job) => {
        const jobCard = `
            <div class="job-card">
                <h5>${job.title}</h5>
                <p>${job.company}</p>
                <p>${job.location}</p>
                <p>Salary: $${job.salary}</p>
                <p>Posted on: ${new Date(job.datePosted).toLocaleDateString()}</p>
            </div>
        `;
        jobListings.innerHTML += jobCard;
    });
}

// Initial display of jobs
displayJobs(jobData);
