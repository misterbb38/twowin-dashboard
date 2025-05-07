

// // // Attendre que le DOM soit entièrement chargé
// // document.addEventListener('DOMContentLoaded', function () {
// //     // Sélection des éléments du DOM
// //     const tabList = document.getElementById('tab-list');
// //     const tabContents = document.querySelector('.tab-contents');
// //     const addTabButton = document.getElementById('add-tab-button');
// //     const menuItems = document.querySelectorAll('.sidebar li');
// //     const appCards = document.querySelectorAll('.app-card');

// //     // Stockage des informations sur les onglets ouverts
// //     const openTabs = new Map();
// //     // ID pour les nouveaux onglets
// //     let tabCounter = 0;

// //     // Ajouter l'onglet d'accueil à la liste des onglets ouverts
// //     openTabs.set('home', {
// //         id: 'home',
// //         title: 'Главная',
// //         element: document.getElementById('home-tab'),
// //         content: document.getElementById('home-content')
// //     });

// //     /**
// //      * Fonction pour ouvrir une application dans un nouvel onglet
// //      * @param {string} url - URL de l'application à ouvrir
// //      * @param {string} title - Titre de l'onglet
// //      */
// //     function openAppInTab(url, title) {
// //         console.log(`Ouverture de l'application: ${title} (${url})`);

// //         // Vérifier si cette URL est déjà ouverte dans un onglet
// //         let existingTabId = null;
// //         openTabs.forEach((tab, id) => {
// //             if (tab.url === url) {
// //                 existingTabId = id;
// //             }
// //         });

// //         if (existingTabId) {
// //             // Si l'onglet existe déjà, l'activer
// //             console.log(`L'application est déjà ouverte dans l'onglet: ${existingTabId}`);
// //             activateTab(existingTabId);
// //         } else {
// //             // Créer un nouvel onglet
// //             const tabId = `tab-${++tabCounter}`;
// //             console.log(`Création d'un nouvel onglet avec ID: ${tabId}`);

// //             // Créer l'élément d'onglet
// //             const tab = document.createElement('div');
// //             tab.className = 'tab';
// //             tab.id = `${tabId}-tab`;
// //             tab.dataset.tabId = tabId;

// //             // Titre de l'onglet
// //             const tabTitle = document.createElement('span');
// //             tabTitle.className = 'tab-title';
// //             tabTitle.textContent = title;

// //             // Bouton de fermeture
// //             const closeButton = document.createElement('button');
// //             closeButton.className = 'tab-close';
// //             closeButton.innerHTML = '<i class="fas fa-times"></i>';
// //             closeButton.title = 'Закрыть';
// //             closeButton.addEventListener('click', function (e) {
// //                 e.stopPropagation(); // Empêcher l'activation de l'onglet lors du clic sur le bouton de fermeture
// //                 closeTab(tabId);
// //             });

// //             // Assembler l'élément d'onglet
// //             tab.appendChild(tabTitle);
// //             tab.appendChild(closeButton);

// //             // Ajouter l'événement de clic pour activer l'onglet
// //             tab.addEventListener('click', function () {
// //                 activateTab(tabId);
// //             });

// //             // Ajouter l'onglet à la barre d'onglets
// //             tabList.appendChild(tab);

// //             // Créer le contenu de l'onglet avec l'iframe
// //             const tabContent = document.createElement('div');
// //             tabContent.className = 'tab-content';
// //             tabContent.id = `${tabId}-content`;

// //             // Iframe pour l'application
// //             const iframe = document.createElement('iframe');
// //             iframe.className = 'app-iframe';
// //             iframe.src = url;
// //             iframe.title = title;

// //             // MODIFICATION IMPORTANTE: autoriser les téléchargements et autres opérations
// //             // Supprimer les attributs sandbox trop restrictifs et ajouter tous les attributs allow nécessaires
// //             iframe.setAttribute('allowfullscreen', 'true');
// //             iframe.setAttribute('allow', 'clipboard-read; clipboard-write; downloads; fullscreen; *');

// //             // Ajouter l'iframe au contenu
// //             tabContent.appendChild(iframe);
// //             tabContents.appendChild(tabContent);

// //             // Enregistrer l'onglet dans la liste des onglets ouverts
// //             openTabs.set(tabId, {
// //                 id: tabId,
// //                 title: title,
// //                 url: url,
// //                 element: tab,
// //                 content: tabContent
// //             });

// //             // Activer le nouvel onglet
// //             activateTab(tabId);
// //         }
// //     }

// //     /**
// //      * Fonction pour activer un onglet spécifique
// //      * @param {string} tabId - ID de l'onglet à activer
// //      */
// //     function activateTab(tabId) {
// //         console.log(`Activation de l'onglet: ${tabId}`);

// //         // Désactiver tous les onglets
// //         document.querySelectorAll('.tab').forEach(tab => {
// //             tab.classList.remove('active');
// //         });
// //         document.querySelectorAll('.tab-content').forEach(content => {
// //             content.classList.remove('active');
// //         });

// //         // Récupérer les informations de l'onglet
// //         const tabInfo = openTabs.get(tabId);

// //         if (tabInfo) {
// //             // Activer l'onglet et son contenu
// //             tabInfo.element.classList.add('active');
// //             tabInfo.content.classList.add('active');

// //             // Faire défiler pour que l'onglet soit visible si nécessaire
// //             tabInfo.element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

// //             // Mettre à jour les éléments actifs dans le menu latéral
// //             if (tabId !== 'home') {
// //                 updateActiveMenuItem(tabInfo.url);
// //             } else {
// //                 // Désélectionner tous les éléments du menu si on est sur l'accueil
// //                 menuItems.forEach(item => item.classList.remove('active'));
// //             }
// //         } else {
// //             console.error(`Onglet introuvable: ${tabId}`);
// //         }
// //     }

// //     /**
// //      * Fonction pour fermer un onglet
// //      * @param {string} tabId - ID de l'onglet à fermer
// //      */
// //     function closeTab(tabId) {
// //         console.log(`Fermeture de l'onglet: ${tabId}`);

// //         // Ne pas fermer l'onglet d'accueil
// //         if (tabId === 'home') {
// //             console.log("L'onglet d'accueil ne peut pas être fermé");
// //             return;
// //         }

// //         // Récupérer les informations de l'onglet
// //         const tabInfo = openTabs.get(tabId);

// //         if (tabInfo) {
// //             // Vérifier si c'est l'onglet actif
// //             const isActive = tabInfo.element.classList.contains('active');

// //             // Supprimer l'onglet et son contenu du DOM
// //             tabInfo.element.remove();
// //             tabInfo.content.remove();

// //             // Retirer l'onglet de la liste des onglets ouverts
// //             openTabs.delete(tabId);

// //             // Si c'était l'onglet actif, activer l'onglet d'accueil
// //             if (isActive) {
// //                 // Trouver le dernier onglet ouvert ou revenir à l'accueil
// //                 const lastTab = Array.from(openTabs.keys()).pop() || 'home';
// //                 activateTab(lastTab);
// //             }
// //         } else {
// //             console.error(`Impossible de fermer l'onglet: ${tabId} - Onglet introuvable`);
// //         }
// //     }

// //     /**
// //      * Mettre à jour l'élément actif dans le menu latéral
// //      * @param {string} url - URL de l'application active
// //      */
// //     function updateActiveMenuItem(url) {
// //         // Désactiver tous les éléments du menu
// //         menuItems.forEach(item => {
// //             item.classList.remove('active');

// //             // Activer l'élément correspondant à l'URL
// //             if (item.dataset.url === url) {
// //                 item.classList.add('active');
// //             }
// //         });
// //     }

// //     /**
// //      * Événements pour les éléments du menu latéral
// //      */
// //     menuItems.forEach(item => {
// //         item.addEventListener('click', function () {
// //             const url = this.dataset.url;
// //             const title = this.dataset.title;

// //             if (url && title) {
// //                 openAppInTab(url, title);
// //             }
// //         });
// //     });

// //     /**
// //      * Événements pour les cartes d'application sur la page d'accueil
// //      */
// //     appCards.forEach(card => {
// //         card.addEventListener('click', function () {
// //             const url = this.dataset.url;
// //             const title = this.dataset.title;

// //             if (url && title) {
// //                 openAppInTab(url, title);
// //             }
// //         });
// //     });

// //     /**
// //      * Événement pour le bouton d'ajout d'onglet
// //      * (Dans votre cas, il ramène à l'accueil)
// //      */
// //     addTabButton.addEventListener('click', function () {
// //         activateTab('home');
// //     });

// //     // Initialiser avec l'onglet d'accueil actif
// //     activateTab('home');

// //     /**
// //      * Fonction pour permettre le glisser-déposer des onglets (optionnel)
// //      */
// //     function enableTabDragAndDrop() {
// //         let draggedTab = null;

// //         // Fonctions pour le drag & drop
// //         function handleDragStart(e) {
// //             if (!e.target.classList.contains('tab')) return;

// //             draggedTab = e.target;
// //             e.dataTransfer.effectAllowed = 'move';
// //             e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox

// //             // Ajouter une classe pendant le drag
// //             setTimeout(() => {
// //                 draggedTab.classList.add('dragging');
// //             }, 0);
// //         }

// //         function handleDragOver(e) {
// //             if (e.preventDefault) {
// //                 e.preventDefault(); // Nécessaire pour permettre le drop
// //             }
// //             e.dataTransfer.dropEffect = 'move';
// //             return false;
// //         }

// //         function handleDragEnter(e) {
// //             const targetTab = e.target.closest('.tab');
// //             if (targetTab && targetTab !== draggedTab) {
// //                 targetTab.classList.add('drag-over');
// //             }
// //         }

// //         function handleDragLeave(e) {
// //             const targetTab = e.target.closest('.tab');
// //             if (targetTab) {
// //                 targetTab.classList.remove('drag-over');
// //             }
// //         }

// //         function handleDrop(e) {
// //             e.stopPropagation();

// //             // Ignorer si on essaie de déplacer vers le même endroit
// //             if (draggedTab === e.target) return false;

// //             const targetTab = e.target.closest('.tab');
// //             if (targetTab && draggedTab) {
// //                 // Ne pas permettre de déplacer l'onglet d'accueil
// //                 if (draggedTab.dataset.tabId === 'home') return false;

// //                 // Insérer l'onglet déplacé avant ou après la cible selon la position
// //                 const rect = targetTab.getBoundingClientRect();
// //                 const middle = rect.left + rect.width / 2;

// //                 if (e.clientX < middle) {
// //                     tabList.insertBefore(draggedTab, targetTab);
// //                 } else {
// //                     tabList.insertBefore(draggedTab, targetTab.nextSibling);
// //                 }

// //                 targetTab.classList.remove('drag-over');
// //             }

// //             return false;
// //         }

// //         function handleDragEnd() {
// //             draggedTab.classList.remove('dragging');
// //             document.querySelectorAll('.tab').forEach(tab => {
// //                 tab.classList.remove('drag-over');
// //             });
// //         }

// //         // Attacher les événements de drag & drop
// //         tabList.addEventListener('dragstart', handleDragStart, false);
// //         tabList.addEventListener('dragover', handleDragOver, false);
// //         tabList.addEventListener('dragenter', handleDragEnter, false);
// //         tabList.addEventListener('dragleave', handleDragLeave, false);
// //         tabList.addEventListener('drop', handleDrop, false);
// //         tabList.addEventListener('dragend', handleDragEnd, false);

// //         // Rendre les onglets draggable (sauf l'onglet d'accueil)
// //         document.querySelectorAll('.tab:not(#home-tab)').forEach(tab => {
// //             tab.setAttribute('draggable', 'true');
// //         });

// //         // Observer les nouveaux onglets pour les rendre draggable
// //         const observer = new MutationObserver(mutations => {
// //             mutations.forEach(mutation => {
// //                 if (mutation.type === 'childList') {
// //                     mutation.addedNodes.forEach(node => {
// //                         if (node.nodeType === 1 && node.classList.contains('tab') && node.id !== 'home-tab') {
// //                             node.setAttribute('draggable', 'true');
// //                         }
// //                     });
// //                 }
// //             });
// //         });

// //         observer.observe(tabList, { childList: true });
// //     }

// //     // Activer le glisser-déposer des onglets (décommenter pour activer)
// //     // enableTabDragAndDrop();

// //     // Gérer les messages des iframes pour communications inter-applications
// //     window.addEventListener('message', function (event) {
// //         console.log('Message reçu:', event.data);

// //         // Si vous voulez permettre aux applications d'interagir avec votre dashboard
// //         // vous pouvez traiter les messages ici
// //         if (event.data && event.data.type === 'twowin_action') {
// //             console.log('Action TWOWIN reçue:', event.data.action);

// //             // Exemples d'actions que vous pourriez traiter:
// //             // - Ouvrir un nouvel onglet
// //             // - Fermer l'onglet actuel
// //             // - Communiquer avec une autre application
// //         }
// //     });
// // });


// // Attendre que le DOM soit entièrement chargé
// document.addEventListener('DOMContentLoaded', function () {
//     // Sélection des éléments du DOM
//     const tabList = document.getElementById('tab-list');
//     const tabContents = document.querySelector('.tab-contents');
//     const addTabButton = document.getElementById('add-tab-button');
//     const menuItems = document.querySelectorAll('.sidebar li');
//     const appCards = document.querySelectorAll('.app-card');

//     // Stockage des informations sur les onglets ouverts
//     const openTabs = new Map();
//     // ID pour les nouveaux onglets
//     let tabCounter = 0;

//     // Ajouter l'onglet d'accueil à la liste des onglets ouverts
//     openTabs.set('home', {
//         id: 'home',
//         title: 'Главная',
//         element: document.getElementById('home-tab'),
//         content: document.getElementById('home-content')
//     });

//     /**
//      * Fonction pour ouvrir une application dans un nouvel onglet
//      * @param {string} url - URL de l'application à ouvrir
//      * @param {string} title - Titre de l'onglet
//      */
//     function openAppInTab(url, title) {
//         console.log(`Ouverture de l'application: ${title} (${url})`);

//         // Vérifier si cette URL est déjà ouverte dans un onglet
//         let existingTabId = null;
//         openTabs.forEach((tab, id) => {
//             if (tab.url === url) {
//                 existingTabId = id;
//             }
//         });

//         if (existingTabId) {
//             // Si l'onglet existe déjà, l'activer
//             console.log(`L'application est déjà ouverte dans l'onglet: ${existingTabId}`);
//             activateTab(existingTabId);
//         } else {
//             // Créer un nouvel onglet
//             const tabId = `tab-${++tabCounter}`;
//             console.log(`Création d'un nouvel onglet avec ID: ${tabId}`);

//             // Créer l'élément d'onglet
//             const tab = document.createElement('div');
//             tab.className = 'tab';
//             tab.id = `${tabId}-tab`;
//             tab.dataset.tabId = tabId;

//             // Titre de l'onglet
//             const tabTitle = document.createElement('span');
//             tabTitle.className = 'tab-title';
//             tabTitle.textContent = title;

//             // Bouton de fermeture
//             const closeButton = document.createElement('button');
//             closeButton.className = 'tab-close';
//             closeButton.innerHTML = '<i class="fas fa-times"></i>';
//             closeButton.title = 'Закрыть';
//             closeButton.addEventListener('click', function (e) {
//                 e.stopPropagation(); // Empêcher l'activation de l'onglet lors du clic sur le bouton de fermeture
//                 closeTab(tabId);
//             });

//             // Assembler l'élément d'onglet
//             tab.appendChild(tabTitle);
//             tab.appendChild(closeButton);

//             // Ajouter l'événement de clic pour activer l'onglet
//             tab.addEventListener('click', function () {
//                 activateTab(tabId);
//             });

//             // Ajouter l'onglet à la barre d'onglets
//             tabList.appendChild(tab);

//             // Créer le contenu de l'onglet avec l'iframe
//             const tabContent = document.createElement('div');
//             tabContent.className = 'tab-content';
//             tabContent.id = `${tabId}-content`;

//             // Conteneur d'erreur - créé mais caché par défaut
//             const errorContainer = document.createElement('div');
//             errorContainer.className = 'error-container';
//             errorContainer.innerHTML = `
//                 <div class="error-box">
//                     <div class="error-icon"><i class="fas fa-exclamation-triangle"></i></div>
//                     <h3>Ошибка подключения</h3>
//                     <p>Невозможно подключиться к приложению. Пожалуйста, обратитесь в ИТ-отдел.</p>
//                     <div class="error-code">ERR_CONNECTION_RESET</div>
//                     <button class="retry-button">Повторить</button>
//                 </div>
//             `;
//             errorContainer.style.display = 'none';

//             // Ajouter un événement au bouton Réessayer
//             const retryButton = errorContainer.querySelector('.retry-button');
//             retryButton.addEventListener('click', function () {
//                 // Cacher le message d'erreur
//                 errorContainer.style.display = 'none';

//                 // Recharger l'iframe
//                 const iframe = tabContent.querySelector('iframe');
//                 if (iframe) {
//                     iframe.style.display = 'block';
//                     iframe.src = url;
//                 }
//             });

//             // Iframe pour l'application
//             const iframe = document.createElement('iframe');
//             iframe.className = 'app-iframe';
//             iframe.src = url;
//             iframe.title = title;

//             // Autoriser les téléchargements et autres opérations
//             iframe.setAttribute('allowfullscreen', 'true');
//             iframe.setAttribute('allow', 'clipboard-read; clipboard-write; downloads; fullscreen; *');

//             // Gestion des erreurs de chargement de l'iframe
//             iframe.addEventListener('error', function () {
//                 handleIframeError(iframe, errorContainer);
//             });

//             // Alternative pour détecter les erreurs, car l'événement 'error' ne fonctionne pas toujours avec les iframes
//             // Vérifier l'état après un court délai
//             setTimeout(function () {
//                 try {
//                     // Tentative d'accès au contenu de l'iframe - va échouer en cas d'erreur CORS ou de connexion
//                     const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
//                     // Si on arrive ici, l'iframe a probablement chargé correctement
//                 } catch (e) {
//                     // Erreur d'accès - probable problème de connexion ou CORS
//                     // Vérifier si l'iframe a chargé quelque chose
//                     if (!iframe.contentWindow || !iframe.contentWindow.location.href || iframe.contentWindow.location.href === 'about:blank') {
//                         handleIframeError(iframe, errorContainer);
//                     }
//                 }
//             }, 5000); // 5 secondes pour permettre le chargement

//             // Ajouter l'iframe et le conteneur d'erreur au contenu
//             tabContent.appendChild(iframe);
//             tabContent.appendChild(errorContainer);
//             tabContents.appendChild(tabContent);

//             // Enregistrer l'onglet dans la liste des onglets ouverts
//             openTabs.set(tabId, {
//                 id: tabId,
//                 title: title,
//                 url: url,
//                 element: tab,
//                 content: tabContent
//             });

//             // Activer le nouvel onglet
//             activateTab(tabId);
//         }
//     }

//     /**
//      * Gestion des erreurs de chargement d'iframe
//      * @param {HTMLIFrameElement} iframe - L'élément iframe 
//      * @param {HTMLElement} errorContainer - Le conteneur pour le message d'erreur
//      */
//     function handleIframeError(iframe, errorContainer) {
//         console.log('Erreur de chargement de l\'iframe');
//         iframe.style.display = 'none';
//         errorContainer.style.display = 'flex';
//     }

//     /**
//      * Fonction pour activer un onglet spécifique
//      * @param {string} tabId - ID de l'onglet à activer
//      */
//     function activateTab(tabId) {
//         console.log(`Activation de l'onglet: ${tabId}`);

//         // Désactiver tous les onglets
//         document.querySelectorAll('.tab').forEach(tab => {
//             tab.classList.remove('active');
//         });
//         document.querySelectorAll('.tab-content').forEach(content => {
//             content.classList.remove('active');
//         });

//         // Récupérer les informations de l'onglet
//         const tabInfo = openTabs.get(tabId);

//         if (tabInfo) {
//             // Activer l'onglet et son contenu
//             tabInfo.element.classList.add('active');
//             tabInfo.content.classList.add('active');

//             // Faire défiler pour que l'onglet soit visible si nécessaire
//             tabInfo.element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

//             // Mettre à jour les éléments actifs dans le menu latéral
//             if (tabId !== 'home') {
//                 updateActiveMenuItem(tabInfo.url);
//             } else {
//                 // Désélectionner tous les éléments du menu si on est sur l'accueil
//                 menuItems.forEach(item => item.classList.remove('active'));
//             }
//         } else {
//             console.error(`Onglet introuvable: ${tabId}`);
//         }
//     }

//     /**
//      * Fonction pour fermer un onglet
//      * @param {string} tabId - ID de l'onglet à fermer
//      */
//     function closeTab(tabId) {
//         console.log(`Fermeture de l'onglet: ${tabId}`);

//         // Ne pas fermer l'onglet d'accueil
//         if (tabId === 'home') {
//             console.log("L'onglet d'accueil ne peut pas être fermé");
//             return;
//         }

//         // Récupérer les informations de l'onglet
//         const tabInfo = openTabs.get(tabId);

//         if (tabInfo) {
//             // Vérifier si c'est l'onglet actif
//             const isActive = tabInfo.element.classList.contains('active');

//             // Supprimer l'onglet et son contenu du DOM
//             tabInfo.element.remove();
//             tabInfo.content.remove();

//             // Retirer l'onglet de la liste des onglets ouverts
//             openTabs.delete(tabId);

//             // Si c'était l'onglet actif, activer l'onglet d'accueil
//             if (isActive) {
//                 // Trouver le dernier onglet ouvert ou revenir à l'accueil
//                 const lastTab = Array.from(openTabs.keys()).pop() || 'home';
//                 activateTab(lastTab);
//             }
//         } else {
//             console.error(`Impossible de fermer l'onglet: ${tabId} - Onglet introuvable`);
//         }
//     }

//     /**
//      * Mettre à jour l'élément actif dans le menu latéral
//      * @param {string} url - URL de l'application active
//      */
//     function updateActiveMenuItem(url) {
//         // Désactiver tous les éléments du menu
//         menuItems.forEach(item => {
//             item.classList.remove('active');

//             // Activer l'élément correspondant à l'URL
//             if (item.dataset.url === url) {
//                 item.classList.add('active');
//             }
//         });
//     }

//     /**
//      * Événements pour les éléments du menu latéral
//      */
//     menuItems.forEach(item => {
//         item.addEventListener('click', function () {
//             const url = this.dataset.url;
//             const title = this.dataset.title;

//             if (url && title) {
//                 openAppInTab(url, title);
//             }
//         });
//     });

//     /**
//      * Événements pour les cartes d'application sur la page d'accueil
//      */
//     appCards.forEach(card => {
//         card.addEventListener('click', function () {
//             const url = this.dataset.url;
//             const title = this.dataset.title;

//             if (url && title) {
//                 openAppInTab(url, title);
//             }
//         });
//     });

//     /**
//      * Événement pour le bouton d'ajout d'onglet
//      * (Dans votre cas, il ramène à l'accueil)
//      */
//     addTabButton.addEventListener('click', function () {
//         activateTab('home');
//     });

//     // Initialiser avec l'onglet d'accueil actif
//     activateTab('home');

//     // Le reste du code reste inchangé...

//     // Gérer les messages des iframes pour communications inter-applications
//     window.addEventListener('message', function (event) {
//         console.log('Message reçu:', event.data);

//         // Si vous voulez permettre aux applications d'interagir avec votre dashboard
//         // vous pouvez traiter les messages ici
//         if (event.data && event.data.type === 'twowin_action') {
//             console.log('Action TWOWIN reçue:', event.data.action);
//         }
//     });
// });


/**
 * TWOWIN Dashboard - Système d'onglets
 * Version améliorée avec gestion des erreurs de connexion
 */

// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Sélection des éléments du DOM
    const tabList = document.getElementById('tab-list');
    const tabContents = document.querySelector('.tab-contents');
    const addTabButton = document.getElementById('add-tab-button');
    const menuItems = document.querySelectorAll('.sidebar li');
    const appCards = document.querySelectorAll('.app-card');
    const themeToggle = document.getElementById('theme-toggle');

    // Stockage des informations sur les onglets ouverts
    const openTabs = new Map();
    // ID pour les nouveaux onglets
    let tabCounter = 0;

    // Ajouter l'onglet d'accueil à la liste des onglets ouverts
    openTabs.set('home', {
        id: 'home',
        title: 'Главная',
        element: document.getElementById('home-tab'),
        content: document.getElementById('home-content')
    });
    // Gestion du mode sombre/clair
    function initializeTheme() {
        // Récupérer le mode préféré de l'utilisateur depuis localStorage
        const prefersDarkMode = localStorage.getItem('darkMode') === 'true';
        const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Appliquer le mode sombre si préféré dans localStorage ou par le système
        if (prefersDarkMode || (prefersColorScheme && localStorage.getItem('darkMode') === null)) {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.title = "Включить светлую тему";
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.title = "Включить тёмную тему";
        }
    }

    // Événement pour le bouton de bascule du thème
    themeToggle.addEventListener('click', function () {
        // Basculer le mode sombre
        const isDarkMode = document.body.classList.toggle('dark-mode');

        // Mettre à jour l'icône
        if (isDarkMode) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
            this.title = "Включить светлую тему";
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
            this.title = "Включить тёмную тему";
        }

        // Enregistrer la préférence
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Initialiser le thème au chargement
    initializeTheme();

    /**
     * Fonction pour ouvrir une application dans un nouvel onglet
     * @param {string} url - URL de l'application à ouvrir
     * @param {string} title - Titre de l'onglet
     */
    function openAppInTab(url, title) {
        console.log(`Ouverture de l'application: ${title} (${url})`);

        // Vérifier si cette URL est déjà ouverte dans un onglet
        let existingTabId = null;
        openTabs.forEach((tab, id) => {
            if (tab.url === url) {
                existingTabId = id;
            }
        });

        if (existingTabId) {
            // Si l'onglet existe déjà, l'activer
            console.log(`L'application est déjà ouverte dans l'onglet: ${existingTabId}`);
            activateTab(existingTabId);
        } else {
            // Créer un nouvel onglet
            const tabId = `tab-${++tabCounter}`;
            console.log(`Création d'un nouvel onglet avec ID: ${tabId}`);

            // Créer l'élément d'onglet
            const tab = document.createElement('div');
            tab.className = 'tab';
            tab.id = `${tabId}-tab`;
            tab.dataset.tabId = tabId;

            // Titre de l'onglet
            const tabTitle = document.createElement('span');
            tabTitle.className = 'tab-title';
            tabTitle.textContent = title;

            // Bouton de fermeture
            const closeButton = document.createElement('button');
            closeButton.className = 'tab-close';
            closeButton.innerHTML = '<i class="fas fa-times"></i>';
            closeButton.title = 'Закрыть';
            closeButton.addEventListener('click', function (e) {
                e.stopPropagation(); // Empêcher l'activation de l'onglet lors du clic sur le bouton de fermeture
                closeTab(tabId);
            });

            // Assembler l'élément d'onglet
            tab.appendChild(tabTitle);
            tab.appendChild(closeButton);

            // Ajouter l'événement de clic pour activer l'onglet
            tab.addEventListener('click', function () {
                activateTab(tabId);
            });

            // Ajouter l'onglet à la barre d'onglets
            tabList.appendChild(tab);

            // Créer le contenu de l'onglet
            const tabContent = document.createElement('div');
            tabContent.className = 'tab-content';
            tabContent.id = `${tabId}-content`;

            // Iframe pour l'application avec gestion d'erreur intégrée
            // Utiliser un attribut srcdoc pour avoir une gestion d'erreur intégrée
            const iframe = document.createElement('iframe');
            iframe.className = 'app-iframe';

            // Utiliser srcdoc pour inclure un HTML qui gère le chargement et les erreurs
            iframe.setAttribute('srcdoc', `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta http-equiv="refresh" content="0;url=${url}">
                    <style>
                        body {
                            font-family: 'Roboto', sans-serif;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            background-color: #f8f9fa;
                            margin: 0;
                        }
                        
                        .loading {
                            text-align: center;
                        }
                        
                        .loading-icon {
                            border: 5px solid #f3f3f3;
                            border-top: 5px solid #27ae60;
                            border-radius: 50%;
                            width: 40px;
                            height: 40px;
                            margin: 0 auto 20px;
                            animation: spin 1s linear infinite;
                        }
                        
                        @keyframes spin {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        
                        #error-container {
                            display: none;
                            text-align: center;
                            background: white;
                            padding: 30px;
                            border-radius: 10px;
                            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                            max-width: 450px;
                        }
                        
                        .error-icon {
                            font-size: 50px;
                            color: #e74c3c;
                            margin-bottom: 20px;
                        }
                        
                        h1 {
                            font-size: 22px;
                            color: #333;
                            margin-top: 0;
                        }
                        
                        p {
                            color: #666;
                            line-height: 1.6;
                        }
                        
                        .error-code {
                            background: #f1f1f1;
                            padding: 8px 12px;
                            border-radius: 4px;
                            display: inline-block;
                            font-family: monospace;
                            margin: 15px 0;
                        }
                        
                        button {
                            background-color: #27ae60;
                            color: white;
                            border: none;
                            padding: 10px 20px;
                            border-radius: 5px;
                            cursor: pointer;
                            margin-top: 10px;
                            font-size: 14px;
                        }
                        
                        button:hover {
                            background-color: #219955;
                        }
                    </style>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                </head>
                <body>
                    <div class="loading" id="loading">
                        <div class="loading-icon"></div>
                        <p>Загрузка приложения...</p>
                    </div>
                    
                    <div id="error-container">
                        <div class="error-icon">
                            <i class="fas fa-exclamation-triangle"></i>
                        </div>
                        <h1>Ошибка подключения</h1>
                        <p>Невозможно подключиться к приложению. Пожалуйста, обратитесь в ИТ-отдел для получения помощи.</p>
                        <div class="error-code">ERR_CONNECTION_RESET</div>
                        <button onclick="location.reload()">Повторить</button>
                    </div>
                    
                    <script>
                        // Vérifier la connexion après un délai
                        setTimeout(function() {
                            // Si on est toujours sur cette page, c'est probablement une erreur
                            if (document.getElementById('loading')) {
                                document.getElementById('loading').style.display = 'none';
                                document.getElementById('error-container').style.display = 'block';
                            }
                        }, 8000); // 8 secondes pour laisser le temps à l'application de se charger
                        
                        // Si une erreur se produit pendant le chargement
                        window.onerror = function() {
                            document.getElementById('loading').style.display = 'none';
                            document.getElementById('error-container').style.display = 'block';
                            return true; // Empêcher l'affichage de l'erreur dans la console
                        };
                    </script>
                </body>
                </html>
            `);

            // Configuration de l'iframe pour téléchargements et autres opérations
            iframe.setAttribute('allowfullscreen', 'true');
            iframe.setAttribute('allow', 'clipboard-read; clipboard-write; downloads; fullscreen; *');

            // Ajouter l'iframe au contenu
            tabContent.appendChild(iframe);
            tabContents.appendChild(tabContent);

            // Enregistrer l'onglet dans la liste des onglets ouverts
            openTabs.set(tabId, {
                id: tabId,
                title: title,
                url: url,
                element: tab,
                content: tabContent
            });

            // Activer le nouvel onglet
            activateTab(tabId);
        }
    }

    /**
     * Fonction pour activer un onglet spécifique
     * @param {string} tabId - ID de l'onglet à activer
     */
    function activateTab(tabId) {
        console.log(`Activation de l'onglet: ${tabId}`);

        // Désactiver tous les onglets
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Récupérer les informations de l'onglet
        const tabInfo = openTabs.get(tabId);

        if (tabInfo) {
            // Activer l'onglet et son contenu
            tabInfo.element.classList.add('active');
            tabInfo.content.classList.add('active');

            // Faire défiler pour que l'onglet soit visible si nécessaire
            tabInfo.element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

            // Mettre à jour les éléments actifs dans le menu latéral
            if (tabId !== 'home') {
                updateActiveMenuItem(tabInfo.url);
            } else {
                // Désélectionner tous les éléments du menu si on est sur l'accueil
                menuItems.forEach(item => item.classList.remove('active'));
            }
        } else {
            console.error(`Onglet introuvable: ${tabId}`);
        }
    }

    /**
     * Fonction pour fermer un onglet
     * @param {string} tabId - ID de l'onglet à fermer
     */
    function closeTab(tabId) {
        console.log(`Fermeture de l'onglet: ${tabId}`);

        // Ne pas fermer l'onglet d'accueil
        if (tabId === 'home') {
            console.log("L'onglet d'accueil ne peut pas être fermé");
            return;
        }

        // Récupérer les informations de l'onglet
        const tabInfo = openTabs.get(tabId);

        if (tabInfo) {
            // Vérifier si c'est l'onglet actif
            const isActive = tabInfo.element.classList.contains('active');

            // Supprimer l'onglet et son contenu du DOM
            tabInfo.element.remove();
            tabInfo.content.remove();

            // Retirer l'onglet de la liste des onglets ouverts
            openTabs.delete(tabId);

            // Si c'était l'onglet actif, activer l'onglet d'accueil
            if (isActive) {
                // Trouver le dernier onglet ouvert ou revenir à l'accueil
                const lastTab = Array.from(openTabs.keys()).pop() || 'home';
                activateTab(lastTab);
            }
        } else {
            console.error(`Impossible de fermer l'onglet: ${tabId} - Onglet introuvable`);
        }
    }

    /**
     * Mettre à jour l'élément actif dans le menu latéral
     * @param {string} url - URL de l'application active
     */
    function updateActiveMenuItem(url) {
        // Désactiver tous les éléments du menu
        menuItems.forEach(item => {
            item.classList.remove('active');

            // Activer l'élément correspondant à l'URL
            if (item.dataset.url === url) {
                item.classList.add('active');
            }
        });
    }

    /**
     * Événements pour les éléments du menu latéral
     */
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const url = this.dataset.url;
            const title = this.dataset.title;

            if (url && title) {
                openAppInTab(url, title);
            }
        });
    });

    /**
     * Événements pour les cartes d'application sur la page d'accueil
     */
    appCards.forEach(card => {
        card.addEventListener('click', function () {
            const url = this.dataset.url;
            const title = this.dataset.title;

            if (url && title) {
                openAppInTab(url, title);
            }
        });
    });

    /**
     * Événement pour le bouton d'ajout d'onglet
     * (Dans votre cas, il ramène à l'accueil)
     */
    addTabButton.addEventListener('click', function () {
        activateTab('home');
    });

    // Initialiser avec l'onglet d'accueil actif
    activateTab('home');

    /**
     * Fonction pour permettre le glisser-déposer des onglets (optionnel)
     */
    function enableTabDragAndDrop() {
        let draggedTab = null;

        // Fonctions pour le drag & drop
        function handleDragStart(e) {
            if (!e.target.classList.contains('tab')) return;

            draggedTab = e.target;
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox

            // Ajouter une classe pendant le drag
            setTimeout(() => {
                draggedTab.classList.add('dragging');
            }, 0);
        }

        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault(); // Nécessaire pour permettre le drop
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        }

        function handleDragEnter(e) {
            const targetTab = e.target.closest('.tab');
            if (targetTab && targetTab !== draggedTab) {
                targetTab.classList.add('drag-over');
            }
        }

        function handleDragLeave(e) {
            const targetTab = e.target.closest('.tab');
            if (targetTab) {
                targetTab.classList.remove('drag-over');
            }
        }

        function handleDrop(e) {
            e.stopPropagation();

            // Ignorer si on essaie de déplacer vers le même endroit
            if (draggedTab === e.target) return false;

            const targetTab = e.target.closest('.tab');
            if (targetTab && draggedTab) {
                // Ne pas permettre de déplacer l'onglet d'accueil
                if (draggedTab.dataset.tabId === 'home') return false;

                // Insérer l'onglet déplacé avant ou après la cible selon la position
                const rect = targetTab.getBoundingClientRect();
                const middle = rect.left + rect.width / 2;

                if (e.clientX < middle) {
                    tabList.insertBefore(draggedTab, targetTab);
                } else {
                    tabList.insertBefore(draggedTab, targetTab.nextSibling);
                }

                targetTab.classList.remove('drag-over');
            }

            return false;
        }

        function handleDragEnd() {
            draggedTab.classList.remove('dragging');
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('drag-over');
            });
        }

        // Attacher les événements de drag & drop
        tabList.addEventListener('dragstart', handleDragStart, false);
        tabList.addEventListener('dragover', handleDragOver, false);
        tabList.addEventListener('dragenter', handleDragEnter, false);
        tabList.addEventListener('dragleave', handleDragLeave, false);
        tabList.addEventListener('drop', handleDrop, false);
        tabList.addEventListener('dragend', handleDragEnd, false);

        // Rendre les onglets draggable (sauf l'onglet d'accueil)
        document.querySelectorAll('.tab:not(#home-tab)').forEach(tab => {
            tab.setAttribute('draggable', 'true');
        });

        // Observer les nouveaux onglets pour les rendre draggable
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1 && node.classList.contains('tab') && node.id !== 'home-tab') {
                            node.setAttribute('draggable', 'true');
                        }
                    });
                }
            });
        });

        observer.observe(tabList, { childList: true });
    }

    // Activer le glisser-déposer des onglets (décommenter pour activer)
    // enableTabDragAndDrop();

    // Gérer les messages des iframes pour communications inter-applications
    window.addEventListener('message', function (event) {
        console.log('Message reçu:', event.data);

        // Si vous voulez permettre aux applications d'interagir avec votre dashboard
        // vous pouvez traiter les messages ici
        if (event.data && event.data.type === 'twowin_action') {
            console.log('Action TWOWIN reçue:', event.data.action);

            // Exemples d'actions que vous pourriez traiter:
            // - Ouvrir un nouvel onglet
            // - Fermer l'onglet actuel
            // - Communiquer avec une autre application
        }
    });
});
