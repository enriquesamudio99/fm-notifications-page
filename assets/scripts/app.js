const clearBtn = document.getElementById('clearBtn');
const notificationsBadge = document.getElementById('notificationsBadge');
let unreadNotifications = document.querySelectorAll('.notification--unread');

document.addEventListener('DOMContentLoaded', () => {

    notificationsBadge.textContent = unreadNotifications.length;

    clearBtn.addEventListener('click', () => {
        unreadNotifications.forEach(unreadNotification => {
            unreadNotification.classList.remove('notification--unread');
        });

        unreadNotifications = document.querySelectorAll('.notification--unread');
        notificationsBadge.textContent = unreadNotifications.length;
    });

});