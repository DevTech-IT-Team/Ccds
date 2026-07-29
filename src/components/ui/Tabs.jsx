import { useState } from 'react';

const Tabs = ({ tabs, defaultTab = 0, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab >= 0 ? defaultTab : 0);

  return (
    <div className={className}>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-blue-pale">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            role="tab"
            aria-selected={activeTab === index}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue/30 ${
              activeTab === index
                ? 'bg-gradient-rose text-white shadow-md'
                : 'bg-blue-faint text-ink-soft hover:bg-blue-pale hover:text-navy-mid'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <div>{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
