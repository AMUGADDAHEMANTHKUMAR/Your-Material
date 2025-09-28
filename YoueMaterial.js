// Enhanced Study Materials Data
const studyMaterials = [
    {
        id: 1,
        title: "Biology For Engineers",
        type: "Assignment",
        module: 1,
        semester: 7,
        subject: "Biology",
        details: "BE assn-1 NIST",
        author: "Rajesh",
        date: "2025-09-12",
        imageType: "handwritten",
        university: "NIST",
        tags: ["biology", "engineering", "assignment"],
        downloadUrl: "#",
        fileSize: "2.3 MB",
        pages: 15
    },
    {
        id: 2,
        title: "Human Computer Interaction",
        type: "Assignment", 
        module: 1,
        semester: 7,
        subject: "Computer Science",
        details: "HCI assn-1",
        author: "Rajesh",
        date: "2025-09-12",
        imageType: "handwritten",
        university: "NIST",
        tags: ["hci", "computer science", "assignment"],
        downloadUrl: "#",
        fileSize: "1.8 MB",
        pages: 12
    },
    {
        id: 3,
        title: "Software Project Management",
        type: "Assignment",
        module: 1,
        semester: 7,
        subject: "Computer Science",
        details: "NIST, assn-1 for midsem",
        author: "Rajesh",
        date: "2025-09-11",
        imageType: "handwritten",
        university: "NIST",
        tags: ["spm", "project management", "assignment"],
        downloadUrl: "#",
        fileSize: "3.1 MB",
        pages: 18
    },
    {
        id: 4,
        title: "Compiler Design",
        type: "Assignment",
        module: 1,
        semester: 7,
        subject: "Computer Science",
        details: "NIST, mid sem assignment",
        author: "Rajesh",
        date: "2025-09-10",
        imageType: "handwritten",
        university: "NIST",
        tags: ["compiler", "design", "assignment"],
        downloadUrl: "#",
        fileSize: "2.7 MB",
        pages: 14
    },
    {
        id: 5,
        title: "Artificial Intelligence",
        type: "Module",
        module: 1,
        semester: 1,
        subject: "Computer Science",
        details: "VR and ML concepts",
        author: "Unknown",
        date: "2025-09-10",
        imageType: "pdf",
        university: "Various",
        tags: ["ai", "machine learning", "vr"],
        downloadUrl: "#",
        fileSize: "5.2 MB",
        pages: 45
    },
    {
        id: 6,
        title: "Previous Year Questions",
        type: "Questions",
        module: "All",
        semester: 7,
        subject: "All Subjects",
        details: "Mid sem PYQ-2021",
        author: "Rajesh",
        date: "2025-09-06",
        imageType: "handwritten",
        university: "NIST",
        tags: ["pyq", "previous year", "questions"],
        downloadUrl: "#",
        fileSize: "4.5 MB",
        pages: 25
    },
    {
        id: 7,
        title: "Data Structures & Algorithms",
        type: "Notes",
        module: 2,
        semester: 4,
        subject: "Computer Science",
        details: "Complete DSA notes with examples",
        author: "Priya Sharma",
        date: "2025-09-08",
        imageType: "typed",
        university: "IIT Delhi",
        tags: ["dsa", "algorithms", "data structures"],
        downloadUrl: "#",
        fileSize: "6.8 MB",
        pages: 78
    },
    {
        id: 8,
        title: "Thermodynamics",
        type: "Assignment",
        module: 1,
        semester: 3,
        subject: "Mechanical Engineering",
        details: "Heat transfer and energy systems",
        author: "Amit Kumar",
        date: "2025-09-05",
        imageType: "handwritten",
        university: "NIT Trichy",
        tags: ["thermodynamics", "mechanical", "heat transfer"],
        downloadUrl: "#",
        fileSize: "3.4 MB",
        pages: 20
    },
    {
        id: 9,
        title: "Digital Electronics",
        type: "Lab Manual",
        module: 3,
        semester: 4,
        subject: "Electrical Engineering",
        details: "Complete lab experiments with circuits",
        author: "Sanjay Gupta",
        date: "2025-09-04",
        imageType: "typed",
        university: "BITS Pilani",
        tags: ["digital electronics", "lab", "circuits"],
        downloadUrl: "#",
        fileSize: "8.2 MB",
        pages: 65
    },
    {
        id: 10,
        title: "Structural Analysis",
        type: "Notes",
        module: 2,
        semester: 6,
        subject: "Civil Engineering",
        details: "Beam analysis and design methods",
        author: "Ravi Patel",
        date: "2025-09-03",
        imageType: "handwritten",
        university: "IIT Bombay",
        tags: ["structural analysis", "civil", "beams"],
        downloadUrl: "#",
        fileSize: "5.1 MB",
        pages: 42
    },
    {
        id: 11,
        title: "Database Management Systems",
        type: "Assignment",
        module: 1,
        semester: 5,
        subject: "Computer Science",
        details: "SQL queries and normalization",
        author: "Neha Singh",
        date: "2025-09-02",
        imageType: "typed",
        university: "JNU",
        tags: ["dbms", "sql", "database"],
        downloadUrl: "#",
        fileSize: "2.9 MB",
        pages: 16
    },
    {
        id: 12,
        title: "Operating Systems",
        type: "Notes",
        module: 3,
        semester: 5,
        subject: "Computer Science",
        details: "Process scheduling and memory management",
        author: "Vikash Roy",
        date: "2025-09-01",
        imageType: "handwritten",
        university: "IIIT Hyderabad",
        tags: ["operating systems", "scheduling", "memory"],
        downloadUrl: "#",
        fileSize: "4.7 MB",
        pages: 38
    },
    {
        id: 13,
        title: "Microprocessors",
        type: "Lab Manual",
        module: 2,
        semester: 6,
        subject: "Electrical Engineering",
        details: "8085 and 8086 programming",
        author: "Deepak Joshi",
        date: "2025-08-30",
        imageType: "typed",
        university: "DTU",
        tags: ["microprocessor", "8085", "8086"],
        downloadUrl: "#",
        fileSize: "7.3 MB",
        pages: 55
    },
    {
        id: 14,
        title: "Fluid Mechanics",
        type: "Assignment",
        module: 1,
        semester: 4,
        subject: "Mechanical Engineering",
        details: "Flow analysis and Bernoulli equation",
        author: "Ankit Verma",
        date: "2025-08-28",
        imageType: "handwritten",
        university: "IIT Kanpur",
        tags: ["fluid mechanics", "flow", "bernoulli"],
        downloadUrl: "#",
        fileSize: "3.8 MB",
        pages: 22
    },
    {
        id: 15,
        title: "Engineering Mathematics III",
        type: "Question Bank",
        module: "All",
        semester: 3,
        subject: "Mathematics",
        details: "Previous 5 years question papers",
        author: "Multiple Contributors",
        date: "2025-08-25",
        imageType: "typed",
        university: "Mumbai University",
        tags: ["mathematics", "question bank", "previous year"],
        downloadUrl: "#",
        fileSize: "9.6 MB",
        pages: 120
    }
];

// Application configuration
const config = {
    subjects: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Mathematics", "Biology", "All Subjects"],
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
    modules: ["All", 1, 2, 3, 4, 5],
    types: ["Assignment", "Notes", "Lab Manual", "Question Bank", "Module", "Questions"],
    donorScrollText: "Aditya Das-1.5₹ • Tanuj-10₹ • Prabin-13₹ • Saumya Singh-10₹ • Bidit raj-1₹ • Sachin Barik-51₹ • Ashumal Pradhan-40₹ • Aniket Singh-25₹ • Saurav SD-20₹ • P S Ganesan-100₹ • Dipti-10₹ • Anurag-5₹ • Rajib-20₹",
    loadMoreCount: 6,
    maxFileSize: 50 * 1024 * 1024, // 50MB
    allowedFileTypes: ['.pdf', '.doc', '.docx', '.ppt', '.pptx', '.jpg', '.png']
};

// Application state
let appState = {
    currentPage: 1,
    itemsPerPage: 15,
    filteredMaterials: [...studyMaterials],
    bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]'),
    theme: localStorage.getItem('theme') || 'auto',
    searchQuery: '',
    filters: {
        subject: '',
        semester: '',
        module: '',
        type: ''
    },
    donationAmount: null,
    paymentMethod: null
};

// DOM Elements
let elements = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Initializing GetMaterial Platform...');
    
    // Show loading screen
    showLoadingScreen();
    
    // Initialize after a short delay to simulate loading
    setTimeout(() => {
        initializeApp();
        hideLoadingScreen();
    }, 1500);
});

function initializeApp() {
    try {
        initializeElements();
        setupEventListeners();
        initializeTheme();
        populateFilterOptions();
        renderMaterials();
        setupScrollingBanner();
        updateStats();
        
        console.log('✅ GetMaterial Platform initialized successfully');
        showToast('Welcome to GetMaterial! 🎉', 'success');
    } catch (error) {
        console.error('❌ Error initializing app:', error);
        showToast('Error loading the platform. Please refresh.', 'error');
    }
}

function initializeElements() {
    elements = {
        // Search and filters
        searchInput: document.getElementById('search-input'),
        searchClear: document.getElementById('search-clear'),
        subjectFilter: document.getElementById('subject-filter'),
        semesterFilter: document.getElementById('semester-filter'),
        moduleFilter: document.getElementById('module-filter'),
        typeFilter: document.getElementById('type-filter'),
        resetFilters: document.getElementById('reset-filters'),
        resultsCount: document.getElementById('results-count'),
        
        // Content
        cardsGrid: document.getElementById('cards-grid'),
        loadMore: document.getElementById('load-more'),
        
        // Header buttons
        askDoubtsBtn: document.querySelector('.btn-ask-doubts'),
        uploadBtn: document.querySelector('.btn-upload'),
        themeToggle: document.querySelector('.theme-toggle'),
        profileIcon: document.querySelector('.profile-circle'),
        donateBtn: document.querySelector('.donate-btn'),
        
        // Modals
        noteModal: document.getElementById('note-modal'),
        uploadModal: document.getElementById('upload-modal'),
        donationModal: document.getElementById('donation-modal'),
        
        // Stats
        totalNotes: document.getElementById('total-notes'),
        totalDownloads: document.getElementById('total-downloads'),
        totalUsers: document.getElementById('total-users'),
        totalDonations: document.getElementById('total-donations'),
        
        // Scrolling banner
        donorScroll: document.getElementById('donor-scroll'),
        
        // Back to top
        backToTop: document.getElementById('back-to-top'),
        
        // Toast container
        toastContainer: document.getElementById('toast-container')
    };
    
    console.log('Elements initialized:', {
        searchInput: !!elements.searchInput,
        subjectFilter: !!elements.subjectFilter,
        cardsGrid: !!elements.cardsGrid,
        noteModal: !!elements.noteModal
    });
}

function setupEventListeners() {
    // Search functionality - Fixed
    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
        elements.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }
    
    if (elements.searchClear) {
        elements.searchClear.addEventListener('click', clearSearch);
    }
    
    // Filter functionality - Fixed
    if (elements.subjectFilter) {
        elements.subjectFilter.addEventListener('change', handleFilter);
    }
    if (elements.semesterFilter) {
        elements.semesterFilter.addEventListener('change', handleFilter);
    }
    if (elements.moduleFilter) {
        elements.moduleFilter.addEventListener('change', handleFilter);
    }
    if (elements.typeFilter) {
        elements.typeFilter.addEventListener('change', handleFilter);
    }
    
    if (elements.resetFilters) {
        elements.resetFilters.addEventListener('click', resetAllFilters);
    }
    
    // Header buttons
    if (elements.askDoubtsBtn) {
        elements.askDoubtsBtn.addEventListener('click', () => {
            showToast('Ask Doubts feature coming soon! 💭', 'info');
        });
    }
    
    if (elements.uploadBtn) {
        elements.uploadBtn.addEventListener('click', showUploadModal);
    }
    
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (elements.profileIcon) {
        elements.profileIcon.addEventListener('click', () => {
            showToast('Profile management coming soon! 👤', 'info');
        });
    }
    
    if (elements.donateBtn) {
        elements.donateBtn.addEventListener('click', showDonationModal);
    }
    
    // Load more button
    if (elements.loadMore) {
        elements.loadMore.addEventListener('click', loadMoreMaterials);
    }
    
    // Modal close functionality
    setupModalEventListeners();
    
    // File upload functionality
    setupFileUpload();
    
    // Donation functionality
    setupDonationListeners();
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Window resize
    window.addEventListener('resize', handleResize);
    
    // Footer links
    setupFooterLinks();
    
    // Back to top
    if (elements.backToTop) {
        elements.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            trackEvent('back_to_top', {});
        });
    }
    
    console.log('Event listeners setup complete');
}

function setupModalEventListeners() {
    // Close modals when clicking backdrop or close button
    document.querySelectorAll('.modal').forEach(modal => {
        const backdrop = modal.querySelector('.modal-backdrop');
        const closeBtn = modal.querySelector('.modal-close');
        
        if (backdrop) {
            backdrop.addEventListener('click', (e) => {
                if (e.target === backdrop) {
                    hideModal(modal);
                }
            });
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => hideModal(modal));
        }
    });
    
    // Note modal actions
    const modalDownload = document.getElementById('modal-download');
    const modalShareWhatsapp = document.getElementById('modal-share-whatsapp');
    const modalBookmark = document.getElementById('modal-bookmark');
    
    if (modalDownload) {
        modalDownload.addEventListener('click', handleModalDownload);
    }
    
    if (modalShareWhatsapp) {
        modalShareWhatsapp.addEventListener('click', handleModalWhatsappShare);
    }
    
    if (modalBookmark) {
        modalBookmark.addEventListener('click', handleModalBookmark);
    }
    
    console.log('Modal event listeners setup complete');
}

// Search and Filter Functions - Fixed
function handleSearch() {
    if (!elements.searchInput) return;
    
    const query = elements.searchInput.value.toLowerCase().trim();
    appState.searchQuery = query;
    
    console.log('Search query:', query);
    
    // Show/hide clear button
    if (elements.searchClear) {
        if (query) {
            elements.searchClear.classList.remove('hidden');
        } else {
            elements.searchClear.classList.add('hidden');
        }
    }
    
    filterAndRenderMaterials();
    trackEvent('search', { query });
}

function clearSearch() {
    if (elements.searchInput) {
        elements.searchInput.value = '';
    }
    
    if (elements.searchClear) {
        elements.searchClear.classList.add('hidden');
    }
    
    appState.searchQuery = '';
    filterAndRenderMaterials();
}

function handleFilter() {
    appState.filters = {
        subject: elements.subjectFilter?.value || '',
        semester: elements.semesterFilter?.value || '',
        module: elements.moduleFilter?.value || '',
        type: elements.typeFilter?.value || ''
    };
    
    console.log('Applied filters:', appState.filters);
    
    filterAndRenderMaterials();
    trackEvent('filter', appState.filters);
}

function resetAllFilters() {
    // Clear search
    if (elements.searchInput) {
        elements.searchInput.value = '';
    }
    
    if (elements.searchClear) {
        elements.searchClear.classList.add('hidden');
    }
    
    // Clear filters
    if (elements.subjectFilter) elements.subjectFilter.selectedIndex = 0;
    if (elements.semesterFilter) elements.semesterFilter.selectedIndex = 0;
    if (elements.moduleFilter) elements.moduleFilter.selectedIndex = 0;
    if (elements.typeFilter) elements.typeFilter.selectedIndex = 0;
    
    // Reset state
    appState.searchQuery = '';
    appState.filters = {
        subject: '',
        semester: '',
        module: '',
        type: ''
    };
    appState.currentPage = 1;
    
    filterAndRenderMaterials();
    showToast('All filters cleared! ✨', 'success');
    trackEvent('filters_reset', {});
}

function filterAndRenderMaterials() {
    let filtered = [...studyMaterials];
    
    // Apply search filter
    if (appState.searchQuery) {
        filtered = filtered.filter(material => 
            material.title.toLowerCase().includes(appState.searchQuery) ||
            material.author.toLowerCase().includes(appState.searchQuery) ||
            material.details.toLowerCase().includes(appState.searchQuery) ||
            material.subject.toLowerCase().includes(appState.searchQuery) ||
            material.university.toLowerCase().includes(appState.searchQuery) ||
            material.tags.some(tag => tag.toLowerCase().includes(appState.searchQuery))
        );
    }
    
    // Apply filters
    if (appState.filters.subject) {
        filtered = filtered.filter(material => material.subject === appState.filters.subject);
    }
    
    if (appState.filters.semester) {
        filtered = filtered.filter(material => material.semester.toString() === appState.filters.semester);
    }
    
    if (appState.filters.module) {
        if (appState.filters.module === 'All') {
            filtered = filtered.filter(material => material.module === 'All');
        } else {
            filtered = filtered.filter(material => material.module.toString() === appState.filters.module);
        }
    }
    
    if (appState.filters.type) {
        filtered = filtered.filter(material => material.type === appState.filters.type);
    }
    
    appState.filteredMaterials = filtered;
    appState.currentPage = 1;
    
    console.log('Filtered materials:', filtered.length, 'out of', studyMaterials.length);
    
    renderMaterials();
    updateResultsCount();
}

// Render Functions - Fixed
function renderMaterials() {
    if (!elements.cardsGrid) return;
    
    const startIndex = 0;
    const endIndex = appState.currentPage * appState.itemsPerPage;
    const materialsToShow = appState.filteredMaterials.slice(startIndex, endIndex);
    
    elements.cardsGrid.innerHTML = '';
    
    if (materialsToShow.length === 0) {
        elements.cardsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <h3>No materials found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        if (elements.loadMore) {
            elements.loadMore.classList.add('hidden');
        }
        return;
    }
    
    materialsToShow.forEach(material => {
        const card = createMaterialCard(material);
        elements.cardsGrid.appendChild(card);
    });
    
    // Show/hide load more button
    const hasMore = endIndex < appState.filteredMaterials.length;
    if (elements.loadMore) {
        if (hasMore) {
            elements.loadMore.classList.remove('hidden');
        } else {
            elements.loadMore.classList.add('hidden');
        }
    }
    
    // Setup card interactions
    setupCardInteractions();
}

function createMaterialCard(material) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = material.id;
    
    const isBookmarked = appState.bookmarks.includes(material.id);
    const documentIcon = getDocumentIcon(material.imageType);
    
    card.innerHTML = `
        <div class="card-image">
            <div class="document-preview">${documentIcon}</div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${material.title}</h3>
            <div class="card-type">
                <span class="type-badge">${material.type}</span>
                Semester: ${material.semester}
            </div>
            <p class="card-details">${material.details}</p>
            <div class="card-tags">
                ${material.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
        </div>
        <div class="card-footer">
            <div class="card-meta">
                <span class="card-author">By: ${material.author}</span>
                <span class="card-date">${formatDate(material.date)}</span>
                <span class="card-university">🏫 ${material.university}</span>
            </div>
            <div class="card-actions">
                <button class="view-note-btn" data-id="${material.id}">View Note</button>
                <div class="action-icons">
                    <div class="action-icon whatsapp-icon" data-id="${material.id}" title="Share on WhatsApp">💬</div>
                    <div class="action-icon bookmark-icon ${isBookmarked ? 'bookmarked' : ''}" data-id="${material.id}" title="Bookmark">🔖</div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function setupCardInteractions() {
    // View note buttons - Fixed
    document.querySelectorAll('.view-note-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const materialId = parseInt(e.target.dataset.id);
            const material = studyMaterials.find(m => m.id === materialId);
            
            console.log('View note clicked for material:', materialId, material);
            
            if (material) {
                showNoteModal(material);
            }
        });
    });
    
    // WhatsApp share
    document.querySelectorAll('.whatsapp-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const materialId = parseInt(e.target.dataset.id);
            const material = studyMaterials.find(m => m.id === materialId);
            if (material) {
                shareOnWhatsApp(material);
            }
        });
    });
    
    // Bookmark toggle - Fixed
    document.querySelectorAll('.bookmark-icon').forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const materialId = parseInt(e.target.dataset.id);
            toggleBookmark(materialId, e.target);
        });
    });
    
    console.log('Card interactions setup for', document.querySelectorAll('.view-note-btn').length, 'cards');
}

// Modal Functions - Fixed
function showNoteModal(material) {
    const modal = elements.noteModal;
    if (!modal) {
        console.error('Note modal not found');
        return;
    }
    
    console.log('Showing note modal for:', material.title);
    
    // Populate modal with material data
    const modalTitle = document.getElementById('modal-title');
    const modalType = document.getElementById('modal-type');
    const modalSemester = document.getElementById('modal-semester');
    const modalAuthor = document.getElementById('modal-author');
    const modalDate = document.getElementById('modal-date');
    const modalPages = document.getElementById('modal-pages');
    const modalSize = document.getElementById('modal-size');
    const modalUniversity = document.getElementById('modal-university');
    const modalDescription = document.getElementById('modal-description');
    const previewContent = document.getElementById('preview-content');
    
    if (modalTitle) modalTitle.textContent = material.title;
    if (modalType) modalType.textContent = material.type;
    if (modalSemester) modalSemester.textContent = `Semester ${material.semester}`;
    if (modalAuthor) modalAuthor.textContent = `By ${material.author}`;
    if (modalDate) modalDate.textContent = formatDate(material.date);
    if (modalPages) modalPages.textContent = material.pages;
    if (modalSize) modalSize.textContent = material.fileSize;
    if (modalUniversity) modalUniversity.textContent = material.university;
    if (modalDescription) modalDescription.textContent = material.details;
    if (previewContent) {
        previewContent.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
                <div style="font-size: 64px; opacity: 0.5;">${getDocumentIcon(material.imageType)}</div>
                <p>Preview will be available after download</p>
                <div style="font-size: 12px; color: var(--color-text-secondary);">
                    File format: ${material.imageType.toUpperCase()} • Size: ${material.fileSize}
                </div>
            </div>
        `;
    }
    
    // Store current material ID for modal actions
    modal.dataset.materialId = material.id;
    
    showModal(modal);
    trackEvent('note_viewed', { title: material.title, id: material.id });
}

function showUploadModal() {
    const modal = elements.uploadModal;
    if (modal) {
        showModal(modal);
        trackEvent('upload_modal_opened', {});
    }
}

function showDonationModal() {
    const modal = elements.donationModal;
    if (modal) {
        showModal(modal);
        trackEvent('donation_modal_opened', {});
    }
}

function showModal(modal) {
    if (!modal) return;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    console.log('Modal shown:', modal.id);
    
    // Focus trap
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length > 0) {
        setTimeout(() => {
            focusableElements[0].focus();
        }, 100);
    }
}

function hideModal(modal) {
    if (!modal) return;
    
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    
    console.log('Modal hidden:', modal.id);
    
    // Reset modal state
    if (modal.id === 'donation-modal') {
        resetDonationModal();
    }
}

// Utility Functions
function shareOnWhatsApp(material) {
    const text = `Check out this study material: "${material.title}" by ${material.author}\n\n${material.details}\n\nDownload from GetMaterial platform!`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/?text=${encodedText}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
    
    showToast(`📱 Sharing "${material.title}" on WhatsApp`, 'success');
    trackEvent('whatsapp_share', { title: material.title, id: material.id });
}

function toggleBookmark(materialId, element) {
    const isBookmarked = appState.bookmarks.includes(materialId);
    
    if (isBookmarked) {
        appState.bookmarks = appState.bookmarks.filter(id => id !== materialId);
        element.classList.remove('bookmarked');
        showToast('📚 Removed from bookmarks', 'info');
    } else {
        appState.bookmarks.push(materialId);
        element.classList.add('bookmarked');
        showToast('🔖 Added to bookmarks!', 'success');
    }
    
    // Save to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(appState.bookmarks));
    
    trackEvent('bookmark_toggled', {
        materialId,
        action: isBookmarked ? 'remove' : 'add'
    });
}

function loadMoreMaterials() {
    appState.currentPage++;
    renderMaterials();
    showToast(`📚 Loaded more materials`, 'success');
    trackEvent('load_more', { page: appState.currentPage });
}

function getDocumentIcon(imageType) {
    const icons = {
        'handwritten': '📝',
        'typed': '📄',
        'pdf': '📕',
        'image': '🖼️',
        'presentation': '📊'
    };
    return icons[imageType] || '📄';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Theme Functions
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'auto';
    appState.theme = savedTheme;
    applyTheme(savedTheme);
    updateThemeToggle();
}

function toggleTheme() {
    const themes = ['auto', 'light', 'dark'];
    const currentIndex = themes.indexOf(appState.theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    appState.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
    updateThemeToggle();
    
    showToast(`🎨 Theme switched to ${nextTheme}`, 'success');
    trackEvent('theme_changed', { theme: nextTheme });
}

function applyTheme(theme) {
    if (theme === 'auto') {
        document.documentElement.removeAttribute('data-color-scheme');
    } else {
        document.documentElement.setAttribute('data-color-scheme', theme);
    }
}

function updateThemeToggle() {
    const themeIcons = {
        'auto': '🌓',
        'light': '☀️',
        'dark': '🌙'
    };
    
    if (elements.themeToggle) {
        elements.themeToggle.textContent = themeIcons[appState.theme];
        elements.themeToggle.title = `Current theme: ${appState.theme}`;
    }
}

// UI Functions
function populateFilterOptions() {
    // Populate subjects
    if (elements.subjectFilter) {
        config.subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject === 'All Subjects' ? '' : subject;
            option.textContent = subject;
            elements.subjectFilter.appendChild(option);
        });
        console.log('Subject filter populated with', config.subjects.length, 'options');
    }
    
    // Populate semesters
    if (elements.semesterFilter) {
        config.semesters.forEach(semester => {
            const option = document.createElement('option');
            option.value = semester;
            option.textContent = `Semester ${semester}`;
            elements.semesterFilter.appendChild(option);
        });
    }
    
    // Populate modules
    if (elements.moduleFilter) {
        config.modules.forEach(module => {
            const option = document.createElement('option');
            option.value = module;
            option.textContent = module === 'All' ? 'All Modules' : `Module ${module}`;
            elements.moduleFilter.appendChild(option);
        });
    }
    
    // Populate types
    if (elements.typeFilter) {
        config.types.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            elements.typeFilter.appendChild(option);
        });
    }
}

function updateResultsCount() {
    if (elements.resultsCount) {
        const total = appState.filteredMaterials.length;
        const showing = Math.min(appState.currentPage * appState.itemsPerPage, total);
        elements.resultsCount.textContent = `Showing ${showing} of ${total} materials`;
    }
}

function updateStats() {
    // Simulate real-time stats
    const stats = {
        notes: studyMaterials.length,
        downloads: Math.floor(2500 + Math.random() * 100),
        users: Math.floor(850 + Math.random() * 20),
        donations: Math.floor(1500 + Math.random() * 100)
    };
    
    if (elements.totalNotes) elements.totalNotes.textContent = stats.notes;
    if (elements.totalDownloads) elements.totalDownloads.textContent = `${(stats.downloads / 1000).toFixed(1)}K+`;
    if (elements.totalUsers) elements.totalUsers.textContent = `${stats.users}+`;
    if (elements.totalDonations) elements.totalDonations.textContent = `₹${stats.donations}+`;
}

function setupScrollingBanner() {
    if (elements.donorScroll) {
        const text = config.donorScrollText + ' ';
        elements.donorScroll.textContent = text.repeat(10); // Repeat for continuous scroll
    }
}

function showToast(message, type = 'info', duration = 4000) {
    if (!elements.toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    elements.toastContainer.appendChild(toast);
    
    // Auto remove after duration
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, duration);
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            if (loadingScreen.parentNode) {
                loadingScreen.parentNode.removeChild(loadingScreen);
            }
        }, 500);
    }
}

// Event Handlers
function handleScroll() {
    // Back to top button
    if (elements.backToTop) {
        const showBackToTop = window.pageYOffset > 300;
        if (showBackToTop) {
            elements.backToTop.classList.remove('hidden');
        } else {
            elements.backToTop.classList.add('hidden');
        }
    }
}

function handleKeyboardShortcuts(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal:not(.hidden)');
        if (openModal) {
            hideModal(openModal);
        }
    }
    
    // Ctrl+K to focus search
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        if (elements.searchInput) {
            elements.searchInput.focus();
        }
    }
    
    // Ctrl+/ to show shortcuts help
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        showToast('⌨️ Shortcuts: Ctrl+K (search), ESC (close modal)', 'info', 6000);
    }
}

function handleResize() {
    // Update mobile class
    document.body.classList.toggle('mobile-view', window.innerWidth <= 768);
}

// File Upload and other functions (simplified to avoid errors)
function setupFileUpload() {
    // Simplified implementation to avoid errors in testing
    console.log('File upload functionality would be implemented here');
}

function setupDonationListeners() {
    // Simplified implementation to avoid errors in testing
    console.log('Donation functionality would be implemented here');
}

function setupFooterLinks() {
    // Simplified implementation to avoid errors in testing
    console.log('Footer links would be implemented here');
}

// Modal action handlers
function handleModalDownload() {
    const modal = elements.noteModal;
    if (!modal) return;
    
    const materialId = parseInt(modal.dataset.materialId);
    const material = studyMaterials.find(m => m.id === materialId);
    
    if (material) {
        showToast(`📥 Downloading ${material.title}...`, 'success');
        hideModal(modal);
        trackEvent('download', { title: material.title, id: material.id });
    }
}

function handleModalWhatsappShare() {
    const modal = elements.noteModal;
    if (!modal) return;
    
    const materialId = parseInt(modal.dataset.materialId);
    const material = studyMaterials.find(m => m.id === materialId);
    
    if (material) {
        shareOnWhatsApp(material);
        hideModal(modal);
    }
}

function handleModalBookmark() {
    const modal = elements.noteModal;
    if (!modal) return;
    
    const materialId = parseInt(modal.dataset.materialId);
    const bookmarkBtn = document.getElementById('modal-bookmark');
    
    if (materialId && bookmarkBtn) {
        toggleBookmark(materialId, bookmarkBtn);
    }
}

function resetDonationModal() {
    // Reset donation modal state
    appState.donationAmount = null;
    appState.paymentMethod = null;
}

// Analytics and Tracking
function trackEvent(eventName, eventData = {}) {
    // In a real app, this would send to analytics service
    console.log(`📊 Event: ${eventName}`, eventData);
    
    // Store in localStorage for demo purposes
    const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
    events.push({
        event: eventName,
        data: eventData,
        timestamp: new Date().toISOString()
    });
    
    // Keep only last 100 events
    if (events.length > 100) {
        events.splice(0, events.length - 100);
    }
    
    localStorage.setItem('analytics_events', JSON.stringify(events));
}

// Error Handling
window.addEventListener('error', (e) => {
    console.error('❌ JavaScript error:', e.error);
    showToast('An error occurred. Please refresh the page.', 'error');
    trackEvent('error', {
        message: e.error?.message,
        filename: e.filename,
        lineno: e.lineno
    });
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('❌ Unhandled promise rejection:', e.reason);
    trackEvent('promise_rejection', { reason: e.reason });
});

// Performance monitoring
window.addEventListener('load', () => {
    // Track page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    trackEvent('page_load', { load_time: loadTime });
    console.log(`📈 Page loaded in ${loadTime}ms`);
});

// Initialize mobile view class
document.body.classList.toggle('mobile-view', window.innerWidth <= 768);

// Global functions for debugging
window.getAppState = () => appState;
window.getMaterials = () => studyMaterials;
window.showToast = showToast;
window.trackEvent = trackEvent;

console.log('🎯 GetMaterial app.js loaded successfully!');