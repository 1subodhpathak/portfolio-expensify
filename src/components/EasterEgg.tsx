interface EasterEggProps {
  onClose: () => void;
}

const EasterEgg = ({ onClose }: EasterEggProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-expensify-dark text-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-expensify-green">⌨️ Editor Tricks & Dotfiles</h2>
            <button onClick={onClose} className="text-expensify-gray hover:text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-8">
            {/* VSCode Setup */}
            <section>
              <h3 className="text-xl font-semibold text-expensify-blue mb-4">VSCode Setup</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <img src="/vscode-screenshot.png" alt="VSCode Setup" className="rounded mb-4 w-full" />
                <p className="text-expensify-gray">My customized VSCode environment optimized for backend development</p>
              </div>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-expensify-green">Essential Extensions</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• ESLint - Linting for clean code</li>
                    <li>• Prettier - Consistent formatting</li>
                    <li>• GitHub Copilot - AI pair programming</li>
                    <li>• REST Client - API testing within editor</li>
                    <li>• Docker - Container management</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-expensify-green">Custom Keybindings</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <code>Alt+D</code> - Duplicate line</li>
                    <li>• <code>Ctrl+R</code> - Run current file</li>
                    <li>• <code>Alt+↑/↓</code> - Move line up/down</li>
                    <li>• <code>Ctrl+K S</code> - Save all files</li>
                    <li>• <code>Alt+B</code> - Toggle sidebar</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Terminal Setup */}
            <section>
              <h3 className="text-xl font-semibold text-expensify-blue mb-4">Terminal Setup</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="text-sm font-mono bg-black p-3 rounded overflow-x-auto">
                  <pre className="text-green-400">
                    {`➜  ~ git:(main) ✗ ls -la
total 56
drwxr-xr-x  11 user  staff   352 Apr 21 12:34 .
drwxr-xr-x   5 user  staff   160 Apr 21 12:30 ..
-rw-r--r--   1 user  staff  3520 Apr 21 12:32 .zshrc
-rw-r--r--   1 user  staff   281 Apr 21 12:33 .gitconfig
drwxr-xr-x  15 user  staff   480 Apr 21 12:29 .config`}
                  </pre>
                </div>
                
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-expensify-green">Shell: ZSH with Oh-My-ZSH</h4>
                    <p className="text-sm text-expensify-gray">Custom theme with git status, execution time, and command suggestions</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-expensify-green">CLI Tools</h4>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li>• <span className="text-expensify-blue">fzf</span> - Fuzzy finder</li>
                      <li>• <span className="text-expensify-blue">ripgrep</span> - Fast search</li>
                      <li>• <span className="text-expensify-blue">bat</span> - Better cat</li>
                      <li>• <span className="text-expensify-blue">exa</span> - Modern ls</li>
                      <li>• <span className="text-expensify-blue">httpie</span> - API testing</li>
                      <li>• <span className="text-expensify-blue">tldr</span> - Practical examples</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Dotfiles */}
            <section>
              <h3 className="text-xl font-semibold text-expensify-blue mb-4">Dotfiles Repository</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-expensify-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <a href="https://github.com/yourusername/dotfiles" target="_blank" rel="noopener noreferrer" className="text-expensify-blue hover:underline">github.com/yourusername/dotfiles</a>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm">My configuration files are version controlled and publicly available. Key files include:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• <code>.vimrc</code> - Vim configuration with custom mappings</li>
                    <li>• <code>.tmux.conf</code> - Terminal multiplexer setup</li>
                    <li>• <code>.zshrc</code> - Shell configuration with aliases</li>
                    <li>• <code>.gitconfig</code> - Git aliases and settings</li>
                    <li>• <code>install.sh</code> - One-command setup for new machines</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Productive Workflows */}
            <section>
              <h3 className="text-xl font-semibold text-expensify-blue mb-4">Productive Workflows</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-expensify-green">Daily Development Routine</h4>
                <ol className="space-y-3 text-sm">
                  <li className="p-2 bg-gray-800 rounded">
                    <strong className="text-expensify-blue">1. Morning Code Review</strong>
                    <p className="text-expensify-gray mt-1">Custom script that shows PRs needing review and summarizes overnight commits</p>
                  </li>
                  <li className="p-2 bg-gray-800 rounded">
                    <strong className="text-expensify-blue">2. API Development</strong>
                    <p className="text-expensify-gray mt-1">REST Client + custom snippets for quick endpoint testing</p>
                  </li>
                  <li className="p-2 bg-gray-800 rounded">
                    <strong className="text-expensify-blue">3. Database Work</strong>
                    <p className="text-expensify-gray mt-1">VS Code database extension + custom SQL snippets</p>
                  </li>
                  <li className="p-2 bg-gray-800 rounded">
                    <strong className="text-expensify-blue">4. Git Workflow</strong>
                    <p className="text-expensify-gray mt-1">Custom aliases for interactive rebasing and commit management</p>
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;