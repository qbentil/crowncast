import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FaChevronLeft } from 'react-icons/fa';

dayjs.extend(relativeTime);

interface Notification {
    id: string;
    title: string;
    description: string;
    isRead: boolean;
    date: string; // ISO string
}

const notificationsData: Notification[] = [
    {
        id: '1',
        title: 'New Message',
        description: 'You have received a new message from John Doe.',
        isRead: false,
        date: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Task Completed',
        description: 'Your task "Design UI" has been completed.',
        isRead: true,
        date: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    },
    // Add more notifications here...
];

const Notifications = () => {
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

    return (
        <div className="max-h-64 overflow-y-auto bg-white  rounded-lg py-4">
            {selectedNotification ? (
                <div>
                    <button onClick={() => setSelectedNotification(null)} className="flex items-center text-primary mb-4">
                        <FaChevronLeft className="mr-2" />
                        Back
                    </button>
                    <h3 className="text-xl font-semibold text-gray-800">{selectedNotification.title}</h3>
                    <p className="text-sm text-gray-500 italic my-2">{selectedNotification.description}</p>
                    <p className="text-xs text-gray-400">
                        {dayjs(selectedNotification.date).fromNow()}
                    </p>
                </div>
            ) : (
                <>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Notifications</h2>
                    <div className="flex flex-col gap-4">
                        {notificationsData.map((notification) => (
                            <div
                                key={notification.id}
                                className={`flex items-start p-4 border-b last:border-b-0 cursor-pointer ${notification.isRead ? 'bg-gray-100' : 'bg-blue-50'
                                    }`}
                                onClick={() => setSelectedNotification(notification)}
                            >
                                <div className="flex flex-col gap-y-0 w-full">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold text-gray-700">
                                            {notification.title}
                                        </p>
                                        {!notification.isRead && (
                                            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">New</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-500 italic truncate">{notification.description}</p>
                                    <p className="text-xs text-gray-400">
                                        {dayjs(notification.date).fromNow()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Notifications;
