interface EasterEggProps {
  onClose: () => void;
}

const EasterEgg = ({ onClose }: EasterEggProps) => {
  const shortcuts = [
    { key: "Ctrl + /", description: "Toggle comment" },
    { key: "Ctrl + D", description: "Select next occurrence" },
    { key: "Alt + ↑/↓", description: "Move line up/down" },
    { key: "Ctrl + Shift + K", description: "Delete line" },
    { key: "Ctrl + F", description: "Find" },
    { key: "Ctrl + H", description: "Replace" },
    { key: "Ctrl + `", description: "Toggle terminal" },
    { key: "Ctrl + B", description: "Toggle sidebar" },
    { key: "Ctrl + Shift + E", description: "Focus explorer" },
    { key: "Ctrl + Shift + F", description: "Find in files" }
  ];

  return (
    <div className="bg-expensify-darkgreen rounded-lg shadow-xl w-full max-w-lg">
      <div className="p-8">
        <h3 className="text-2xl font-bold text-expensify-green mb-6">
          Editor Shortcuts
        </h3>
        
        <div className="grid gap-4">
          {shortcuts.map((shortcut, index) => (
            <div 
              key={index}
              className="bg-expensify-buttonGreen bg-opacity-50 p-4 rounded-lg hover:bg-opacity-70 transition duration-300"
            >
              <div className="flex justify-between items-center">
                <code className="text-expensify-green font-mono bg-expensify-darkgreen px-2 py-1 rounded">
                  {shortcut.key}
                </code>
                <span className="text-expensify-light opacity-90">
                  {shortcut.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-expensify-light opacity-75 text-sm mb-4">
            Pro tip: Use these shortcuts to boost your productivity!
          </p>
          <button
            onClick={onClose}
            className="bg-expensify-green text-expensify-darkgreen font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;