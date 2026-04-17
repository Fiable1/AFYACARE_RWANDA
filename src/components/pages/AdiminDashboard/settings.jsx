import React, { useState } from 'react';
import { User, Bell, Lock, Save, ShieldCheck } from 'lucide-react';

const Settings = () => {
  // Logic for the Logout function as requested in earlier steps
  const handleLogout = () => {
    console.log("User logged out");
    // In a real app, logic to clear tokens and redirect would go here
  };


  
  return (
    <div className="p-8 bg-[#F8F9FA] min-h-screen font-sans max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="space-y-6">
        {/* Profile Settings Section */}
        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <User size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 leading-none">Profile Settings</h2>
              <p className="text-sm text-gray-500 mt-1">Update your personal information</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="px-4 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-green-500 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="px-4 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-green-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="px-4 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-green-500 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Phone Number</label>
              <input 
                type="text" 
                placeholder="(555) 123-4567" 
                className="px-4 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-green-500 outline-none transition-all"
              />
            </div>

            <button type="button" className="bg-[#2D7A43] hover:bg-[#235d33] text-white px-6 py-2.5 rounded-lg font-bold transition-colors">
              Save Changes
            </button>
          </form>
        </section>

        {/* Notifications Section */}
        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Bell size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 leading-none">Notifications</h2>
              <p className="text-sm text-gray-500 mt-1">Manage your notification preferences</p>
            </div>
          </div>

          <div className="space-y-6">
            <NotificationToggle 
              title="Email Notifications" 
              description="Receive email updates for appointments" 
              defaultChecked={true} 
            />
            <NotificationToggle 
              title="SMS Notifications" 
              description="Get text message reminders" 
              defaultChecked={false} 
            />
            <NotificationToggle 
              title="Push Notifications" 
              description="Browser notifications for urgent updates" 
              defaultChecked={true} 
            />
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <Lock size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 leading-none">Security</h2>
              <p className="text-sm text-gray-500 mt-1">Update your password and security settings</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Current Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="px-4 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-green-500 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">New Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="px-4 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-green-500 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Confirm Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="px-4 py-2.5 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-green-500 outline-none transition-all"
              />
            </div>

            <button type="button" className="bg-[#2D7A43] hover:bg-[#235d33] text-white px-6 py-2.5 rounded-lg font-bold transition-colors">
              Update Password
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

// Internal sub-component for notification toggles to match visual design
const NotificationToggle = ({ title, description, defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked);
  
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
      <div>
        <p className="text-sm font-bold text-gray-900">{title}</p>
        <p className="text-xs text-gray-400 mt-0.5">{description}</p>
      </div>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={() => setChecked(!checked)}
        className="w-5 h-5 accent-green-600 cursor-pointer"
      />
    </div>
  );
};

export default Settings;