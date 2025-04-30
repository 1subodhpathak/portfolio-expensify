const ExpensifyContribution = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="bg-expensify-darkgreen p-6 rounded-lg border border-[#1A3D32]">
        <h1 className="text-4xl font-bold text-expensify-light mb-4">PR #48884</h1>
        <p className="text-expensify-light opacity-90">
          Issue Identification & Resolution in Expensify's Open Source Project
        </p>
      </div>

      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Description Card */}
            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <h3 className="text-2xl font-semibold text-expensify-green mb-6">Contribution Details</h3>
              <div className="space-y-4">
                <p className="text-expensify-light leading-relaxed">
                  Identified a critical issue in Expensify's codebase and proactively engaged with the internal team to address it. 
                  This demonstrates my ability to understand complex codebases and effectively communicate technical issues.
                </p>
                <p className="text-expensify-light leading-relaxed">
                  Through collaboration with the Expensify team, I helped identify the root cause and participated in discussions 
                  about potential solutions, showcasing both technical insight and team collaboration skills.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-medium text-expensify-green mb-4">Key Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-expensify-green">•</span>
                    <span className="text-expensify-light">Issue identification in production codebase</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-expensify-green">•</span>
                    <span className="text-expensify-light">Effective communication with internal team</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-expensify-green">•</span>
                    <span className="text-expensify-light">Contributing to open source problem-solving</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Terminal Card */}
            <div className="bg-expensify-buttonGreen bg-opacity-30 rounded-xl p-8 border border-expensify-green">
              <div className="bg-[#0D1F1C] rounded-lg overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#1A3D32] border-b border-[#2D4842]">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
                  </div>
                  <span className="text-expensify-light text-sm opacity-75">contribution.ts</span>
                  <div className="w-16"></div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-sm">
                  <pre className="text-expensify-light">
                    <code>{`interface IssueContribution {
  id: string;
  type: 'BUG_IDENTIFICATION';
  status: 'RESOLVED';
  details: {
    prNumber: 48884;
    platform: 'React Native';
    impact: 'Production';
    collaboration: [
      'Issue Identification',
      'Team Communication',
      'Problem Analysis'
    ];
  };
}

// Demonstrates proactive issue 
// identification and resolution
// in Expensify's open source project`}</code>
                  </pre>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-4">
                <a
                  href="https://github.com/Expensify/App/pull/48884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-expensify-green text-expensify-darkgreen px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                  </svg>
                  <span>View Pull Request</span>
                </a>
                <a
                  href="https://github.com/Expensify/App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-transparent border border-expensify-green text-expensify-green px-6 py-3 rounded-lg font-medium hover:bg-expensify-green hover:bg-opacity-10 transition duration-200"
                >
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpensifyContribution;