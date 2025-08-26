   // All of your existing Javascript remains the same
    // Enhanced Template Data with more examples and analytics
    let templates = [
        {
            id: 'birthday-1', title: 'Happy Birthday Template', emoji: '🎂', category: 'birthday',
            description: 'A warm and celebratory birthday message',
            content: `Dear [Recipient Name],\n\nHappy Birthday! 🎉🎂\n\nOn this special day, I wanted to send you my warmest wishes and let you know how much you mean to me. May your day be filled with joy, laughter, and all the things that make you happy.\n\nI hope this year brings you closer to your dreams and fills your life with wonderful new experiences. You deserve all the happiness in the world!\n\nWith love,\n[Your Name]`,
            favorite: false, usage: 12, aiGenerated: false, new: false, archived: false,
            rating: 4.5, openRate: 92, clickRate: 45, lastUsed: '2023-11-15'
        },
        {
            id: 'anniversary-1', title: 'Anniversary Template', emoji: '💕', category: 'anniversary',
            description: 'Romantic anniversary message for couples',
            content: `My Dearest [Recipient Name],\n\nHappy Anniversary! 💕\n\nAnother year has passed since we began this beautiful journey together, and my love for you grows stronger with each passing day. I cherish every moment we've shared - the laughter, the challenges, and everything in between.\n\nThank you for being my rock, my confidant, and my greatest love. Here's to many more years of creating beautiful memories together.\n\nForever yours,\n[Your Name]`,
            favorite: true, usage: 8, aiGenerated: false, new: false, archived: false,
            rating: 4.8, openRate: 95, clickRate: 52, lastUsed: '2023-11-10'
        },
        {
            id: 'graduation-1', title: 'Graduation Template', emoji: '🎓', category: 'graduation',
            description: 'Congratulatory message for graduates',
            content: `Dear [Recipient Name],\n\nCongratulations on your graduation! 🎓✨\n\nWhat an incredible achievement! Your hard work, dedication, and perseverance have paid off, and I couldn't be prouder of you. This is just the beginning of an exciting new chapter in your life.\n\nMay your future be filled with success, fulfillment, and endless opportunities. The world is yours to conquer!\n\nWith admiration,\n[Your Name]`,
            favorite: false, usage: 5, aiGenerated: false, new: true, 
            rating: 4.2, openRate: 88, clickRate: 38, lastUsed: '2023-11-05'
        },
        {
            id: 'love-1', title: 'Love Letter Template', emoji: '💌', category: 'love',
            description: 'Heartfelt love letter for special someone',
            content: `My Dearest [Recipient Name],\n\nAs I sit down to write this letter, my heart overflows with love for you. 💌\n\nFrom the moment we met, you've brought light and meaning into my life. Your smile brightens my darkest days, and your presence fills me with a sense of belonging I've never known before.\n\nI cherish every moment we spend together, and I look forward to creating countless more memories with you. You are my everything.\n\nWith all my love,\n[Your Name]`,
            favorite: true, usage: 15, aiGenerated: false, new: false,
            rating: 4.9, openRate: 97, clickRate: 65, lastUsed: '2023-10-28'
        },
        {
            id: 'motivation-1', title: 'Motivation Template', emoji: '💪', category: 'motivation',
            description: 'Inspirational message to boost confidence',
            content: `Hey [Recipient Name],\n\nI wanted to remind you of something important today: You are stronger than you think! 💪\n\nLife may throw challenges your way, but you have the courage, wisdom, and determination to overcome anything. Every obstacle is just another opportunity to grow and become an even better version of yourself.\n\nBelieve in yourself as much as I believe in you. You've got this!\n\nCheering you on,\n[Your Name]`,
            favorite: false, usage: 7, aiGenerated: true, new: false,
            rating: 4.0, openRate: 85, clickRate: 42, lastUsed: '2023-11-12'
        },
        {
            id: 'apology-1', title: 'Heartfelt Apology', emoji: '🙏', category: 'apology',
            description: 'Sincere apology message',
            content: `Dear [Recipient Name],\n\nI want to sincerely apologize for my actions and the hurt I've caused. 🙏\n\nI realize that my words/actions were wrong, and I take full responsibility for them. There's no excuse for what I did, and I understand if you need time to process this.\n\nYour friendship/relationship means the world to me, and I'm committed to making things right. I hope you can find it in your heart to forgive me.\n\nWith sincere regret,\n[Your Name]`,
            favorite: false, usage: 3, aiGenerated: false, new: true,
            rating: 4.3, openRate: 82, clickRate: 35, lastUsed: '2023-10-15'
        },
        {
            id: 'business-1', title: 'Professional Follow-Up', emoji: '📊', category: 'business',
            description: 'Professional email after a meeting',
            content: `Dear [Recipient Name],\n\nIt was a pleasure meeting with you earlier today to discuss [Specific Detail]. Thank you for taking the time to speak with me.\n\nAs we discussed, I will [action items]. Please let me know if there's any additional information you need from my end.\n\nI look forward to [next steps] and continuing our collaboration. Please don't hesitate to reach out if you have any questions in the meantime.\n\nBest regards,\n[Your Name]\n[Company Name]`,
            favorite: true, usage: 9, aiGenerated: true, new: false,
            rating: 4.6, openRate: 90, clickRate: 48, lastUsed: '2023-11-14'
        },
        {
            id: 'reminder-1', title: 'Friendly Reminder', emoji: '⏰', category: 'reminder',
            description: 'Gentle reminder about an upcoming event',
            content: `Hi [Recipient Name],\n\nJust a friendly reminder about our [event/meeting] scheduled for [Event Date].\n\nWe'll be discussing [Specific Detail] and I'm looking forward to your insights on the matter.\n\nPlease let me know if you need to reschedule or if you have any questions beforehand.\n\nLooking forward to seeing you!\n\nBest,\n[Your Name]`,
            favorite: false, usage: 6, aiGenerated: true, new: false,
            rating: 3.8, openRate: 78, clickRate: 32, lastUsed: '2023-11-03'
        },
        {
            id: 'birthday-2', title: 'Funny Birthday', emoji: '😂', category: 'birthday',
            description: 'Humorous birthday message for friends',
            content: `Hey [Recipient Name],\n\nHappy Birthday! 🎉\n\nAnother year older, but let's be honest - you're not getting older, you're just leveling up! 🎮\n\nI hope your day is filled with laughter, cake, and minimal adult responsibilities. Remember, age is just a number... a number that keeps getting alarmingly higher! 😂\n\nSeriously though, have an amazing day!\n\nCheers,\n[Your Name]`,
            favorite: true, usage: 11, aiGenerated: true, new: false,
            rating: 4.7, openRate: 93, clickRate: 55, lastUsed: '2023-10-22'
        },
        {
            id: 'love-2', title: 'Long Distance Love', emoji: '💖', category: 'love',
            description: 'Message for a long-distance partner',
            content: `My Dearest [Recipient Name],\n\nEven though miles separate us, you're always in my thoughts and close to my heart. 💖\n\nI wanted to remind you how much I love and appreciate you. These days apart only make me cherish our time together even more.\n\nI can't wait until we're together again. Until then, know that I'm counting down the days and sending all my love your way.\n\nMissing you always,\n[Your Name]`,
            favorite: false, usage: 4, aiGenerated: false, new: true,
            rating: 4.4, openRate: 89, clickRate: 41, lastUsed: '2023-10-30'
        }
    ];

    // State variables
    let currentTheme = 'dark';
    let selectedTemplate = null;
    let isEditing = false;
    let editingTemplateId = null;
    let filterState = {
        search: '',
        category: '',
        favoritesOnly: false,
        folder: 'all'
    };
    let templateToDelete = null;
    let currentTone = 'professional';
    let currentRating = 0;

    // DOM Elements (This part is unchanged)
    const templatesGrid = document.getElementById('templates-grid');
    const templateSearch = document.getElementById('template-search');
    const templateCategory = document.getElementById('template-category');
    const favoritesFilter = document.getElementById('favorites-filter');
    const resetFilters = document.getElementById('reset-filters');
    const newTemplateBtn = document.getElementById('new-template-btn');
    const previewModal = document.getElementById('preview-modal');
    const previewTitle = document.getElementById('preview-title');
    const previewOutput = document.getElementById('preview-output');
    const previewSubject = document.getElementById('preview-subject');
    const previewDate = document.getElementById('preview-date');
    const previewFooter = document.getElementById('preview-footer');
    const useTemplateBtn = document.getElementById('use-template-btn');
    const scheduleTemplateBtn = document.getElementById('schedule-template-btn');
    const editorModal = document.getElementById('editor-modal');
    const addTagModal = document.getElementById('add-tag-modal'); // <-- ADD THIS
    const newTagInput = document.getElementById('new-tag-input'); // <-- AND ADD THIS
    const editorTitle = document.getElementById('editor-title');
    const templateName = document.getElementById('template-name');
    const templateEmoji = document.getElementById('template-emoji');
    const templateCategoryInput = document.getElementById('template-category-input');
    const templateDescription = document.getElementById('template-description');
    const templateContent = document.getElementById('template-content');
    const editorSave = document.getElementById('editor-save');
    const duplicateBtn = document.getElementById('duplicate-btn');
    const aiPrompt = document.getElementById('ai-prompt');
    const generateTemplateBtn = document.getElementById('generate-template');
    const aiLoading = document.getElementById('ai-loading');
    const aiImproveBtn = document.getElementById('ai-improve');
    const aiShortenBtn = document.getElementById('ai-shorten');
    const aiFormalBtn = document.getElementById('ai-formal');
    const aiCasualBtn = document.getElementById('ai-casual');
    const aiTranslateBtn = document.getElementById('ai-translate');
    const copyToClipboardBtn = document.getElementById('copy-to-clipboard');
    const formatButtons = document.querySelectorAll('.btn-format');
    const exportAllBtn = document.getElementById('export-all-btn');
    const categoryTagsContainer = document.getElementById('category-tags');
    const toneButtons = document.querySelectorAll('.tone-btn');
    const aiSuggestions = document.querySelectorAll('#ai-suggestions .tag');
    const variableInputs = document.getElementById('variable-inputs');
    const templateRating = document.getElementById('template-rating');
    const editorPreview = document.getElementById('editor-preview');
    const folders = document.querySelectorAll('.folder');
    const popularTemplatesList = document.getElementById('popular-templates');
    const tutorialBtn = document.getElementById('tutorial-btn');
    const importBtn = document.getElementById('import-btn');
    const versionHistoryBtn = document.getElementById('version-history-btn');
    const versionHistoryPreviewBtn = document.getElementById('version-history-preview-btn');
    

    function initPage() {
        // Load templates from localStorage if available
        const savedTemplates = localStorage.getItem('futureInboxTemplates');
        if (savedTemplates) {
            templates = JSON.parse(savedTemplates);
        }
        
        renderTemplates();
        initCharts();
        updatePopularTemplates();
        
        // Event listeners (This part is unchanged)
        templateSearch.addEventListener('input', handleSearch);
        templateCategory.addEventListener('change', handleCategoryChange);
        favoritesFilter.addEventListener('click', toggleFavoritesFilter);
        resetFilters.addEventListener('click', resetAllFilters);
        newTemplateBtn.addEventListener('click', createNewTemplate);
        document.getElementById('preview-close').addEventListener('click', closePreviewModal);
        document.getElementById('preview-close-btn').addEventListener('click', closePreviewModal);
        useTemplateBtn.addEventListener('click', useSelectedTemplate);
        scheduleTemplateBtn.addEventListener('click', scheduleTemplate);
        versionHistoryBtn.addEventListener('click', showVersionHistory);
        document.getElementById('version-history-btn-editor').addEventListener('click', showVersionHistory);
        versionHistoryPreviewBtn.addEventListener('click', showVersionHistory);
        document.getElementById('editor-close').addEventListener('click', closeEditorModal);
        document.getElementById('editor-cancel').addEventListener('click', closeEditorModal);
        editorSave.addEventListener('click', saveTemplate);
        duplicateBtn.addEventListener('click', duplicateTemplate);
        generateTemplateBtn.addEventListener('click', generateAITemplate);
        aiImproveBtn.addEventListener('click', () => enhanceTemplate('improve'));
        aiShortenBtn.addEventListener('click', () => enhanceTemplate('shorten'));
        aiFormalBtn.addEventListener('click', () => enhanceTemplate('formal'));
        aiCasualBtn.addEventListener('click', () => enhanceTemplate('casual'));
        aiTranslateBtn.addEventListener('click', () => enhanceTemplate('translate'));
        document.getElementById('ai-optimize').addEventListener('click', () => enhanceTemplate('optimize'));
        copyToClipboardBtn.addEventListener('click', copyToClipboard);
        templateContent.addEventListener('input', updateEditorPreview);
        exportAllBtn.addEventListener('click', exportAllTemplates);
        tutorialBtn.addEventListener('click', showTutorial);
        importBtn.addEventListener('click', importTemplates);
    
    document.getElementById('add-tag-close').addEventListener('click', closeAddTagModal);
    document.getElementById('add-tag-cancel').addEventListener('click', closeAddTagModal);
    document.getElementById('add-tag-save').addEventListener('click', saveNewTag);

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'add-tag-preview-btn') {
            openAddTagModal();
        }
    });
    
    document.getElementById('import-file-input').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            try {
                const importedTemplates = JSON.parse(e.target.result);
                
                if (!Array.isArray(importedTemplates)) {
                    throw new Error("Invalid format: JSON file is not an array.");
                }

                const existingIds = new Set(templates.map(t => t.id));
                const newTemplates = importedTemplates.filter(t => t.id && !existingIds.has(t.id));

                if (newTemplates.length > 0) {
                    templates.unshift(...newTemplates);
                    localStorage.setItem('futureInboxTemplates', JSON.stringify(templates));
                    renderTemplates();
                    showToast(`${newTemplates.length} new template(s) imported successfully!`, 'success');
                } else {
                    showToast('No new templates found in this file.', 'info');
                }

            } catch (error) {
                showToast(`Import Error: ${error.message}`, 'error');
                console.error("Import error:", error);
            } finally {
                event.target.value = '';
            }
        };
        
        reader.readAsText(file);
    });

        document.querySelectorAll('#editor-category .category-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                document.querySelectorAll('#editor-category .category-tag').forEach(t => t.classList.remove('active'));
                tag.classList.add('active');
                templateCategoryInput.value = tag.dataset.category;
            });
        });
        
        categoryTagsContainer.querySelectorAll('.tag').forEach(tag => {
            tag.addEventListener('click', () => {
                const currentCategory = tag.dataset.category;
                const wasActive = tag.classList.contains('active');
                categoryTagsContainer.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
                
                if (!wasActive) {
                    tag.classList.add('active');
                    filterState.category = currentCategory;
                } else {
                    filterState.category = '';
                }
                renderTemplates();
            });
        });
        
        toneButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                toneButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentTone = btn.dataset.tone;
            });
        });
        
        aiSuggestions.forEach(suggestion => {
            suggestion.addEventListener('click', () => {
                aiPrompt.value = suggestion.dataset.prompt;
                generateAITemplate();
            });
        });
        
        document.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', setRating);
        });
        
        formatButtons.forEach(button => {
            button.addEventListener('click', handleFormatting);
        });
        
        folders.forEach(folder => {
            folder.addEventListener('click', () => {
                folders.forEach(f => f.classList.remove('active'));
                folder.classList.add('active');
                filterState.folder = folder.dataset.folder;
                renderTemplates();
            });
        });
        
        document.querySelectorAll('.variable-card').forEach(card => {
            card.addEventListener('click', () => {
                const variable = card.dataset.variable;
                insertVariable(variable);
            });
        });
        
        previewDate.textContent = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        showToast('Welcome to FutureInbox Templates!', 'info');
    }

    function initCharts() {
        // Open rate chart
        const openRateCtx = document.getElementById('open-rate-chart').getContext('2d');
        new Chart(openRateCtx, {
            type: 'doughnut',
            data: {
                labels: ['Opened', 'Not Opened'],
                datasets: [{
                    data: [86, 14],
                    backgroundColor: ['#00d4ff', 'rgba(100, 116, 139, 0.3)'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                cutout: '70%',
                plugins: { legend: { display: false } }
            }
        });
        
        // Rating chart
        const ratingCtx = document.getElementById('rating-chart').getContext('2d');
        new Chart(ratingCtx, {
            type: 'doughnut',
            data: {
                labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
                datasets: [{
                    data: [65, 20, 10, 3, 2],
                    backgroundColor: [ '#00d4ff', '#22c55e', '#f59e0b', '#ff7ed4', '#ef4444' ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                cutout: '70%',
                plugins: { legend: { display: false } }
            }
        });
        
        // Usage chart
        const usageCtx = document.getElementById('usage-chart').getContext('2d');
        new Chart(usageCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Usage',
                    data: [12, 19, 8, 15, 10, 5, 9],
                    backgroundColor: 'rgba(0, 212, 255, 0.5)',
                    borderColor: '#00d4ff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { y: { beginAtZero: true } },
                plugins: { legend: { display: false } }
            }
        });
        
        // Trend chart
        const trendCtx = document.getElementById('trend-chart').getContext('2d');
        new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                datasets: [{
                    label: 'Template Usage',
                    data: [65, 59, 80, 81, 56, 72, 88, 76, 85, 92, 78],
                    fill: true,
                    backgroundColor: 'rgba(0, 212, 255, 0.1)',
                    borderColor: '#00d4ff',
                    tension: 0.4,
                    pointBackgroundColor: '#00d4ff'
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { y: { beginAtZero: false } },
                plugins: { legend: { display: false } }
            }
        });
    }

    function updatePopularTemplates() {
        const sortedTemplates = [...templates].sort((a, b) => b.usage - a.usage);
        popularTemplatesList.innerHTML = '';
        sortedTemplates.slice(0, 5).forEach(template => {
            const li = document.createElement('li');
            li.textContent = `${template.title} - Used ${template.usage} times`;
            popularTemplatesList.appendChild(li);
        });
    }

    function renderTemplates() {
        templatesGrid.innerHTML = '';
        const filteredTemplates = templates.filter(template => {
            const searchLower = filterState.search.toLowerCase();
            const matchesSearch = filterState.search === '' || 
                template.title.toLowerCase().includes(searchLower) || 
                template.description.toLowerCase().includes(searchLower) ||
                template.content.toLowerCase().includes(searchLower);
            
            const matchesCategory = filterState.category === '' || template.category === filterState.category;
            const matchesFavorites = !filterState.favoritesOnly || template.favorite;
            
            let matchesFolder = true;
            if (filterState.folder === 'favorites') matchesFolder = template.favorite;
            else if (filterState.folder === 'quick') matchesFolder = template.usage > 10;
            else if (filterState.folder === 'team') matchesFolder = template.category === 'business';
            else if (filterState.folder === 'ai') matchesFolder = template.aiGenerated;
            else if (filterState.folder === 'archived') matchesFolder = false; // Archived logic not implemented
            
            return matchesSearch && matchesCategory && matchesFavorites && matchesFolder;
        });
        
        // Update folder counts
        document.querySelector('[data-folder="all"] .folder-count').textContent = templates.length;
        document.querySelector('[data-folder="favorites"] .folder-count').textContent = templates.filter(t => t.favorite).length;
        document.querySelector('[data-folder="quick"] .folder-count').textContent = templates.filter(t => t.usage > 10).length;
        document.querySelector('[data-folder="team"] .folder-count').textContent = templates.filter(t => t.category === 'business').length;
        document.querySelector('[data-folder="ai"] .folder-count').textContent = templates.filter(t => t.aiGenerated).length;
        
        if (filteredTemplates.length === 0) {
            templatesGrid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon"><i class="fas fa-file-text fa-2x"></i></div>
                    <h3 class="empty-title">No templates found</h3>
                    <p class="empty-description">Try changing your filters or creating a new template.</p>
                    <button class="btn btn-primary" onclick="createNewTemplate()"><i class="fas fa-plus"></i> Create Template</button>
                </div>
            `;
        } else {
            filteredTemplates.forEach(template => {
                const templateCard = document.createElement('div');
                templateCard.className = `template-card ${template.favorite ? 'favorite' : ''} ${template.aiGenerated ? 'ai-generated' : ''} ${template.new ? 'new' : ''}`;
                const tagClass = template.aiGenerated ? 'tag-ai' : `tag-${template.category || 'misc'}`;
                const categoryDisplay = template.category ? template.category.charAt(0).toUpperCase() + template.category.slice(1) : 'General';
                
                templateCard.innerHTML = `
                    ${template.new ? `<div class="new-badge">NEW</div>` : ''}
                    <div class="template-header">
                        <div class="template-emoji">${template.emoji}</div>
                        <div class="template-favorite ${template.favorite ? 'active' : ''}" onclick="toggleFavorite(event, '${template.id}')">
                            <i class="${template.favorite ? 'fas' : 'far'} fa-heart"></i>
                        </div>
                    </div>
                    <h3 class="template-title">${template.title} ${template.aiGenerated ? '<span style="color:#a66cff;font-size:0.8em;"><i class="fas fa-robot"></i> AI</span>' : ''}</h3>
                    <div class="template-meta">
                        <div class="template-meta-item ${tagClass}">
                            <i class="fas fa-tag"></i> ${categoryDisplay}
                        </div>
                        <div class="template-meta-item"><i class="fas fa-chart-line"></i> Used ${template.usage} times</div>
                        <div class="template-meta-item"><i class="fas fa-star"></i> ${template.rating}/5</div>
                    </div>
                    <p class="template-content">${template.description}</p>
                    <div class="template-preview">${template.content.substring(0, 150)}...</div>
                    <div class="template-actions">
                        <button class="btn btn-outline" onclick="previewTemplate('${template.id}')"><i class="fas fa-eye"></i> Preview</button>
                        <button class="btn btn-outline" onclick="editTemplate('${template.id}')"><i class="fas fa-edit"></i> Edit</button>
                        <button class="btn btn-primary" onclick="useTemplate('${template.id}')"><i class="fas fa-paper-plane"></i> Use</button>
                        <button class="btn btn-destructive" onclick="confirmDeleteTemplate('${template.id}')"><i class="fas fa-trash"></i></button>
                    </div>
                `;
                templatesGrid.appendChild(templateCard);
                if (template.new) {
                    templateCard.classList.add('animate__animated', 'animate__pulse');
                }
            });
        }
        
        document.getElementById('total-templates').textContent = templates.length;
        document.getElementById('usage-count').textContent = templates.reduce((sum, t) => sum + t.usage, 0);
    }

    function handleSearch() {
        filterState.search = this.value;
        renderTemplates();
    }

    function handleCategoryChange() {
        filterState.category = this.value;
        categoryTagsContainer.querySelectorAll('.tag').forEach(tag => {
            tag.classList.toggle('active', tag.dataset.category === this.value);
        });
        renderTemplates();
    }
    
    function toggleFavoritesFilter() {
        this.classList.toggle('active');
        filterState.favoritesOnly = this.classList.contains('active');
        renderTemplates();
    }

    function resetAllFilters() {
        filterState = { search: '', category: '', favoritesOnly: false, folder: 'all' };
        templateSearch.value = '';
        templateCategory.value = '';
        favoritesFilter.classList.remove('active');
        categoryTagsContainer.querySelectorAll('.tag').forEach(tag => tag.classList.remove('active'));
        folders.forEach(f => f.classList.remove('active'));
        document.querySelector('.folder[data-folder="all"]').classList.add('active');
        renderTemplates();
        showToast('Filters reset successfully', 'success');
    }

    function createNewTemplate() {
        isEditing = false;
        editingTemplateId = null;
        editorTitle.textContent = 'New Template';
        
        templateName.value = '';
        templateEmoji.value = '📝';
        templateDescription.value = '';
        templateContent.value = `Dear [Recipient Name],\n\nI hope this message finds you well.\n\n[Write your message here]\n\nBest regards,\n[Your Name]`;
        templateCategoryInput.value = '';
        document.querySelectorAll('#editor-category .category-tag').forEach(tag => tag.classList.remove('active'));
        
        editorModal.classList.add('active');
        updateEditorPreview();
    }

    function editTemplate(templateId) {
        const template = templates.find(t => t.id === templateId);
        if (!template) return;
        
        isEditing = true;
        editingTemplateId = templateId;
        editorTitle.textContent = 'Edit Template';
        
        templateName.value = template.title;
        templateEmoji.value = template.emoji;
        templateDescription.value = template.description;
        templateContent.value = template.content;
        templateCategoryInput.value = template.category;
        
        document.querySelectorAll('#editor-category .category-tag').forEach(tag => {
            tag.classList.toggle('active', tag.dataset.category === template.category);
        });
        
        editorModal.classList.add('active');
        updateEditorPreview();
    }

    function saveTemplate() {
        const title = templateName.value.trim();
        const emoji = templateEmoji.value.trim() || '📝';
        const description = templateDescription.value.trim();
        const content = templateContent.value.trim();
        const category = templateCategoryInput.value || 'misc';
        
        if (!title || !content) {
            showToast('Title and content are required', 'error');
            return;
        }
        
        if (isEditing) {
            const index = templates.findIndex(t => t.id === editingTemplateId);
            if (index !== -1) {
                templates[index] = { ...templates[index], title, emoji, description, content, category, new: false };
                showToast('Template updated successfully', 'success');
            }
        } else {
            const newTemplate = {
                id: `custom-${Date.now()}`, title, emoji, description, content, category,
                favorite: false, usage: 0, aiGenerated: false, new: true,
                rating: 0, openRate: 0, clickRate: 0, lastUsed: null
            };
            templates.unshift(newTemplate);
            showToast('Template created successfully', 'success');
        }
        
        localStorage.setItem('futureInboxTemplates', JSON.stringify(templates));
        closeEditorModal();
        renderTemplates();
        updatePopularTemplates();
    }

    function duplicateTemplate() {
        if (!editingTemplateId) return; // Can only duplicate from an existing template in editor
        const template = templates.find(t => t.id === editingTemplateId);
        if (!template) return;

        const newTemplate = {
            ...template,
            id: `custom-${Date.now()}`,
            title: `Copy of ${template.title}`,
            new: true,
            usage: 0
        };
        templates.unshift(newTemplate);
        localStorage.setItem('futureInboxTemplates', JSON.stringify(templates));
        
        showToast('Template duplicated successfully', 'success');
        closeEditorModal();
        renderTemplates();
    }

    function previewTemplate(templateId) {
        const template = templates.find(t => t.id === templateId);
        if (!template) return;
        
        selectedTemplate = template;
        previewTitle.textContent = template.title;
        previewSubject.textContent = template.title;
        
        const variables = extractVariables(template.content);
        variableInputs.innerHTML = '';
        
        if (variables.length > 0) {
            variables.forEach(variable => {
                variableInputs.innerHTML += `
                    <div class="variable-input-group">
                        <label class="variable-input-label">${variable}</label>
                        <input type="text" class="variable-input" data-variable="${variable}" placeholder="Enter ${variable}">
                    </div>`;
            });
            document.querySelectorAll('.variable-input').forEach(input => {
                input.addEventListener('input', updatePreviewOutput);
            });
        } else {
            variableInputs.innerHTML = '<p class="text-muted">No variables found in this template.</p>';
        }
        
        updatePreviewOutput();
        currentRating = template.rating;
        updateRatingStars();
        createTemplateChart(template);
        
        previewModal.classList.add('active');
        
    
        previewModal.classList.add('active');
    }
    

    function updateEditorPreview() {
        let content = templateContent.value;
        content = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color: #00d4ff;">$1</a>')
            .replace(/\n/g, '<br>');
        editorPreview.innerHTML = content;
    }

    function updatePreviewOutput() {
        if (!selectedTemplate) return;
        let output = selectedTemplate.content;
        
        document.querySelectorAll('#variable-inputs .variable-input').forEach(input => {
            const variable = input.dataset.variable;
            const value = input.value || `[${variable}]`;
            output = output.replaceAll(`[${variable}]`, `<span style="color: var(--primary);">${value}</span>`);
        });
        
        output = output.replace(/\n/g, '<br>');
        previewOutput.innerHTML = output;
        previewFooter.textContent = `This message was sent using FutureInbox templates on ${new Date().toLocaleDateString()}`;
    }
    
    let previewChartInstance;
    function createTemplateChart(template) {
        const ctx = document.getElementById('template-chart').getContext('2d');
        if (previewChartInstance) {
            previewChartInstance.destroy();
        }
        previewChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Usage', 'Open Rate %', 'Click Rate %'],
                datasets: [{
                    label: 'Performance',
                    data: [template.usage, template.openRate, template.clickRate],
                    backgroundColor: [ 'rgba(0, 212, 255, 0.7)', 'rgba(166, 108, 255, 0.7)', 'rgba(255, 121, 198, 0.7)' ]
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                indexAxis: 'y',
                scales: { x: { beginAtZero: true, max: 100 } },
                plugins: { legend: { display: false } }
            }
        });
    }

    function handleFormatting(e) {
        const format = e.currentTarget.dataset.format;
        const textarea = document.getElementById('template-content');
        const start = textarea.selectionStart;        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        let newText = '';
        
        switch(format) {
            case 'bold': newText = `**${selectedText}**`; break;
            case 'italic': newText = `*${selectedText}*`; break;
            case 'link': newText = `[${selectedText}](https://example.com)`; break;
            case 'variable': newText = `[${selectedText || 'Variable Name'}]`; break;
            case 'clear': newText = selectedText.replace(/[\*\[\]\(\)]/g, ''); break;
            default: return;
        }
        
        textarea.setRangeText(newText, start, end, 'end');
        updateEditorPreview();
        textarea.focus();
    }

    function setRating(e) {
        const rating = parseInt(e.target.dataset.rating);
        currentRating = rating;
        updateRatingStars();
        
        const index = templates.findIndex(t => t.id === selectedTemplate.id);
        if (index !== -1) {
            templates[index].rating = rating;
            localStorage.setItem('futureInboxTemplates', JSON.stringify(templates));
            showToast('Rating saved successfully', 'success');
            renderTemplates(); // Re-render to update card display
        }
    }

    function updateRatingStars() {
        document.querySelectorAll('#template-rating .star').forEach((star, index) => {
            star.classList.toggle('active', index < currentRating);
        });
    }

    function extractVariables(content) {
        const regex = /\[([^\]]+)\]/g; // Changed to match content inside brackets
        return [...new Set(Array.from(content.matchAll(regex), m => m[1]))];
    }

       function useTemplate(templateData) {
        let template;
        
        // Check if we were given the full template object or just the ID string
        if (typeof templateData === 'string') {
            template = templates.find(t => t.id === templateData);
        } else {
            template = templateData;
        }

        if (!template) {
            showToast('Could not find the specified template.', 'error');
            return;
        }
        
        // If the template exists in our main list, update its usage stats
        const templateInList = templates.find(t => t.id === template.id);
        if (templateInList) {
            templateInList.usage++;
            templateInList.lastUsed = new Date().toISOString().split('T')[0];
            templateInList.new = false;
            localStorage.setItem('futureInboxTemplates', JSON.stringify(templates));
        }
        
        // --- THIS IS THE KEY CHANGE ---
        // Now we save EVERYTHING we need: content, name, theme (category), AND the emoji!
        localStorage.setItem('selectedTemplate', JSON.stringify({
            content: template.content,
            name: template.title,
            theme: template.category,
            emoji: template.emoji 
        }));
        
        showToast(`"${template.title}" selected! Redirecting...`, 'success');
        setTimeout(() => { window.location.href = 'compose.html'; }, 1500);
    }
    function useSelectedTemplate() {
        if (selectedTemplate) useTemplate(selectedTemplate.id);
    }

           function scheduleTemplate() {
        if (selectedTemplate) {
            // This makes the schedule button do the same thing as the "Use" button.
            useTemplate(selectedTemplate.id);
        }
    }

    function showVersionHistory() {
        const title = selectedTemplate ? ` for "${selectedTemplate.title}"` : '';
        showToast(`Feature coming soon: Version History${title}.`, 'info');
    }

    function shareTemplates() {
        showToast('Feature coming soon: Share templates with your team.', 'info');
    }


    function showTutorial() {
        showToast('Feature coming soon: Tutorial video.', 'info');
        // We'll keep the fun link for now, but the message is clearer :)
        setTimeout(() => { window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); }, 1000);
    }

    function toggleFavorite(event, templateId) {
        event.stopPropagation();
        const index = templates.findIndex(t => t.id === templateId);
        if (index !== -1) {
            templates[index].favorite = !templates[index].favorite;
            localStorage.setItem('futureInboxTemplates', JSON.stringify(templates));
            renderTemplates();
            const action = templates[index].favorite ? 'added to' : 'removed from';
            showToast(`Template ${action} favorites`, 'success');
        }
    }
    async function generateAITemplate() {
        const prompt = aiPrompt.value.trim();
        if (!prompt) {
            showToast('Please describe the template you want to generate', 'error');
            return;
        }
        
        aiLoading.style.display = 'block';
        generateTemplateBtn.disabled = true;

        try {
            const workerUrl = 'https://futureinbox-ai-template-assistant.kashmalakhan1232.workers.dev'; 

            const response = await fetch(workerUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt, tone: currentTone })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `AI server error`);
            }

            const aiTemplate = await response.json();

            const newTemplate = {
                id: `ai-${Date.now()}`,
                ...aiTemplate, // This includes the 'category' from the AI
                description: `AI-generated for: "${prompt}"`,
                favorite: false, usage: 0, aiGenerated: true, new: true,
                rating: 0, openRate: 0, clickRate: 0, lastUsed: null
            };

            templates.unshift(newTemplate);
            renderTemplates();
            showToast('AI template generated! Now you can edit it.', 'ai');
            aiPrompt.value = '';
            
            editTemplate(newTemplate.id); 

        } catch (error) {
            console.error('AI Generation Error:', error);
            showToast(`AI Error: ${error.message}`, 'error');
        } finally {
            aiLoading.style.display = 'none';
            generateTemplateBtn.disabled = false;
        }
    }

          async function enhanceTemplate(action) {
        const content = templateContent.value;
        if (!content.trim()) {
            showToast('Please add content to enhance', 'error');
            return;
        }
        
        const button = document.getElementById(`ai-${action}`);
        const originalButtonText = button.innerHTML;
        button.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;
        button.disabled = true;
        showToast(`AI is working on '${action}'...`, 'ai');

        try {
            const workerUrl = 'https://futureinbox-ai-template-assistant.kashmalakhan1232.workers.dev';

            const response = await fetch(workerUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: content, action: action })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `AI enhancer failed`);
            }
            
            const result = await response.json();
            
            if (result.enhancedText) {
                templateContent.value = result.enhancedText;
                updateEditorPreview();
                showToast(`Content successfully enhanced!`, 'success');
            } else {
                throw new Error("AI response was not in the expected format.");
            }

        } catch (error) {
            console.error(`AI Enhancement Error (${action}):`, error);
            showToast(`AI Error: ${error.message}`, 'error');
        } finally {
            button.innerHTML = originalButtonText;
            button.disabled = false;
        }
    }

    function insertVariable(variable) {
        const contentField = document.getElementById('template-content');
        contentField.setRangeText(` ${variable} `, contentField.selectionStart, contentField.selectionEnd, 'end');
        updateEditorPreview();
        contentField.focus();
        showToast(`Variable ${variable} inserted`, 'info');
    }
    
    function closePreviewModal() { previewModal.classList.remove('active'); selectedTemplate = null; }
    function closeEditorModal() { editorModal.classList.remove('active'); isEditing = false; editingTemplateId = null; }

       // ---- FIND AND REPLACE THIS ENTIRE FUNCTION ----

    function confirmDeleteTemplate(templateId) {
        // Find the template to get its name for the confirmation message
        const template = templates.find(t => t.id === templateId);
        if (!template) return; // Exit if template not found

        // Get references to the modal and its interactive elements
        const modal = document.getElementById('confirm-delete-modal');
        const description = document.getElementById('confirm-delete-description');
        const confirmBtn = document.getElementById('confirm-delete-confirm');
        const cancelBtn = document.getElementById('confirm-delete-cancel');
        const closeBtn = document.getElementById('confirm-delete-close');

        // Set the specific message for the template being deleted
        description.innerHTML = `Are you sure you want to permanently delete "<strong>${template.title}</strong>"? This action cannot be undone.`;

        // This function will be called when the user confirms the deletion
        const handleDelete = () => {
            templates = templates.filter(t => t.id !== templateId);
            localStorage.setItem('futureInboxTemplates', JSON.stringify(templates));
            renderTemplates(); // Re-render the UI
            updatePopularTemplates(); // Update stats and insights
            showToast(`"${template.title}" was deleted successfully`, 'success');
            cleanup(); // Hide the modal and remove listeners
        };

        // This function hides the modal and removes event listeners to prevent issues
        const cleanup = () => {
            modal.classList.remove('active');
            // Use .removeEventListener to prevent memory leaks
            confirmBtn.removeEventListener('click', handleDelete);
            cancelBtn.removeEventListener('click', cleanup);
            closeBtn.removeEventListener('click', cleanup);
        };

        // Attach the event listeners
        confirmBtn.addEventListener('click', handleDelete);
        cancelBtn.addEventListener('click', cleanup);
        closeBtn.addEventListener('click', cleanup);

        // Finally, show the modal
        modal.classList.add('active');
    }

    // ---- THE REST OF YOUR JAVASCRIPT REMAINS THE SAME ----

    function exportAllTemplates() {
        const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(templates, null, 2))}`;
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "futureinbox-templates.json");
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        showToast('All templates exported successfully', 'success');
    }

    function copyToClipboard() {
        if (selectedTemplate) {
            navigator.clipboard.writeText(selectedTemplate.content)
                .then(() => showToast('Template content copied!', 'success'))
                .catch(() => showToast('Failed to copy content', 'error'));
        }
    }
    
    function importTemplates() {
        document.getElementById('import-file-input').click();
    }
    function shareTemplates() { showToast('Sharing templates with your team...', 'info'); }

    function showToast(message, type = 'info') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        const toastIcon = document.getElementById('toast-icon');
        
        toastMessage.textContent = message;
        toast.className = `toast ${type}`; 
        
        const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', warning: 'fa-exclamation-triangle', ai: 'fa-robot', info: 'fa-info-circle' };
        toastIcon.className = `fas ${icons[type] || icons['info']}`;
        
        void toast.offsetWidth;
        
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    }

    document.addEventListener('DOMContentLoaded', init);
    
    function openAddTagModal() {
        addTagModal.classList.add('active');
        newTagInput.value = '';
        newTagInput.focus();
    }

    function closeAddTagModal() {
        addTagModal.classList.remove('active');
    }

    function saveNewTag() {
        const newTagName = newTagInput.value.trim();
        if (newTagName === '') {
            showToast('Tag name cannot be empty', 'error');
            return;
        }
        const tagContainer = document.querySelector('#preview-modal .tag-container');
        const addTagBtn = tagContainer.querySelector('.btn-sm');
        
        const tagEl = document.createElement('div');
        tagEl.className = 'tag';
        tagEl.textContent = newTagName;

        tagContainer.insertBefore(tagEl, addTagBtn);
        showToast(`Tag "${newTagName}" added! (UI demo)`, 'success');
        closeAddTagModal();
    }