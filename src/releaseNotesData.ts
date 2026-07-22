import { Smartphone, Globe, Gamepad2, Wrench, ShieldCheck, Zap } from 'lucide-react';

export type UpdateType = 'Major Update' | 'Minor Update' | 'Bug Fix' | 'Security Update' | 'New Feature';
export type AppCategory = 'Android Apps' | 'Web Apps' | 'Games' | 'Security Updates';

export interface ReleaseNote {
  id: string;
  appId: string;
  appName: string;
  appIcon: any; // Lucide icon
  iconColor: string;
  version: string;
  releaseDate: string; // YYYY-MM-DD for sorting
  updateType: UpdateType;
  category: AppCategory;
  changes: {
    newFeatures?: string[];
    improvements?: string[];
    bugFixes?: string[];
    performance?: string[];
    security?: string[];
    knownIssues?: string[];
  };
}

export const RELEASE_NOTES: ReleaseNote[] = [
  {
    id: 'rn-001',
    appId: 'yebnas-fitness',
    appName: 'Yebnas Fitness',
    appIcon: Smartphone,
    iconColor: 'text-orange-500',
    version: '2.1.0',
    releaseDate: '2026-07-01',
    updateType: 'Major Update',
    category: 'Android Apps',
    changes: {
      newFeatures: [
        'Added personalized workout generation based on user goals.',
        'Introduced Apple Watch and WearOS integration.'
      ],
      improvements: [
        'Redesigned the dashboard for better visibility of daily metrics.',
        'Updated typography for improved readability.'
      ],
      performance: [
        'Reduced app launch time by 30%.'
      ],
      bugFixes: [
        'Fixed an issue where workout history wouldn\'t sync offline.',
        'Resolved a crash that occurred when switching rapidly between tabs.'
      ]
    }
  },
  {
    id: 'rn-002',
    appId: 'studio-dashboard',
    appName: 'Studio Dashboard',
    appIcon: Globe,
    iconColor: 'text-blue-500',
    version: '1.0.5',
    releaseDate: '2026-06-28',
    updateType: 'Security Update',
    category: 'Web Apps',
    changes: {
      security: [
        'Implemented mandatory 2FA for administrative accounts.',
        'Upgraded encryption protocols for stored user data.'
      ],
      improvements: [
        'Enhanced login page accessibility.',
        'Streamlined the password reset flow.'
      ]
    }
  },
  {
    id: 'rn-003',
    appId: 'dev-toolkit',
    appName: 'Dev Toolkit',
    appIcon: Wrench,
    iconColor: 'text-emerald-500',
    version: '0.9.0',
    releaseDate: '2026-06-15',
    updateType: 'Minor Update',
    category: 'Web Apps',
    changes: {
      newFeatures: [
        'Added a new Base64 encoder/decoder tool.',
        'Introduced syntax highlighting for the JSON formatter.'
      ],
      bugFixes: [
        'Fixed a layout issue on mobile devices where tools would overlap.'
      ]
    }
  },
  {
    id: 'rn-004',
    appId: 'cosmic-run',
    appName: 'Cosmic Run',
    appIcon: Gamepad2,
    iconColor: 'text-purple-500',
    version: '0.9.5-beta',
    releaseDate: '2026-06-10',
    updateType: 'New Feature',
    category: 'Games',
    changes: {
      newFeatures: [
        'Added global leaderboards.',
        'Introduced daily challenge mode.'
      ],
      performance: [
        'Optimized rendering for 60fps on mid-range devices.',
        'Reduced memory footprint during long play sessions.'
      ],
      knownIssues: [
        'Leaderboard may occasionally fail to sync on spotty connections.'
      ]
    }
  },
  {
    id: 'rn-005',
    appId: 'studio-security',
    appName: 'Yebnas Authentication',
    appIcon: ShieldCheck,
    iconColor: 'text-rose-500',
    version: 'System-wide',
    releaseDate: '2026-05-20',
    updateType: 'Security Update',
    category: 'Security Updates',
    changes: {
      security: [
        'Patched a potential vulnerability in the OAuth token validation flow.',
        'Updated underlying cryptographic libraries to latest stable versions.',
        'Implemented stricter rate limiting on login endpoints.'
      ],
      performance: [
        'Token validation latency reduced by 15ms globally.'
      ]
    }
  }
];
