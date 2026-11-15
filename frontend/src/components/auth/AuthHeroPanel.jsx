// =============================================================================
// src/components/auth/AuthHeroPanel.jsx
// MilJor Premium Authentication V2: Distinct Editorial Hero Panels
// Dedicated Sign-In vs Buyer/Supplier Registration Panels with Role-Specific
// Copy, Theme-Aware Typography, and Refined Warm Taupe-Champagne Contrast
// =============================================================================
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Layers,
  Scale,
  Sparkles,
  Building2,
  PackageCheck
} from 'lucide-react';

import signInHeroDark from '../../assets/hero/miljor-rice-hero-dark.png';
import signInHeroLight from '../../assets/hero/miljor-rice-hero-light.png';
import registerHeroImg from '../../assets/premium_rice_sack.jpg';

export function AuthHeroPanel({
  pageType = 'signin', // 'signin' | 'register' | 'forgot-password'
  role = 'BUYER', // 'BUYER' | 'SUPPLIER'
  showBackgroundImage = true,
  className = '',
}) {
  const { isDark } = useTheme();

  // Distinct image selection
  let heroImage = signInHeroDark;
  if (pageType === 'signin') {
    heroImage = isDark ? signInHeroDark : signInHeroLight;
  } else {
    heroImage = registerHeroImg;
  }

  // Theme-aware color tokens
  const colors = isDark
    ? {
        bg: '#072A21',
        borderRight: '1px solid rgba(200, 178, 118, 0.15)',
        heading: '#FBF8F1',
        supporting: '#E4EDE7',
        secondary: '#C8D4CD',
        accent: '#C8B276',
        badgeBg: 'rgba(7, 42, 33, 0.65)',
        badgeBorder: 'rgba(200, 178, 118, 0.25)',
        badgeText: '#E6DFD3',
        benefitIconBg: 'rgba(200, 178, 118, 0.12)',
        benefitBorder: 'rgba(200, 178, 118, 0.16)',
        divider: 'rgba(200, 178, 118, 0.20)',
        imageOpacity: 0.38,
        imageBlend: 'luminosity',
        imageOverlay: 'linear-gradient(180deg, rgba(7,42,33,0.78) 0%, rgba(5,37,29,0.92) 100%)',
      }
    : {
        bg: '#EADDC7',
        borderRight: '1px solid rgba(169, 133, 67, 0.25)',
        heading: '#1C1C19',
        supporting: '#38342C',
        secondary: '#4A443A',
        accent: '#967434',
        badgeBg: 'rgba(255, 255, 255, 0.65)',
        badgeBorder: 'rgba(169, 133, 67, 0.30)',
        badgeText: '#1C1C19',
        benefitIconBg: 'rgba(169, 133, 67, 0.12)',
        benefitBorder: 'rgba(169, 133, 67, 0.18)',
        divider: 'rgba(169, 133, 67, 0.20)',
        imageOpacity: 0.25,
        imageBlend: 'multiply',
        imageOverlay: 'linear-gradient(180deg, rgba(246,240,230,0.82) 0%, rgba(234,221,199,0.92) 100%)',
      };

  // Distinct copy & benefits per page type and role
  let badgeLabel = 'B2B Wholesale Procurement';
  let heading = '';
  let supportingCopy = '';
  let benefits = [];

  if (pageType === 'signin') {
    badgeLabel = 'B2B Procurement Platform';
    heading = 'Welcome back.';
    supportingCopy = 'Your procurement, all in one place.';
    benefits = [
      {
        icon: CheckCircle2,
        title: 'Direct Mill Pricing',
        desc: 'Wholesale commodity rates unlocked through pooled demand.',
      },
      {
        icon: Building2,
        title: 'Verified Commercial Network',
        desc: 'Vetted food manufacturers, importers and certified distributors.',
      },
      {
        icon: ShieldCheck,
        title: 'Escrow Payment Protection',
        desc: 'Safepay sandbox escrow custody released upon delivery confirmation.',
      },
    ];
  } else if (pageType === 'register') {
    if (role === 'SUPPLIER') {
      badgeLabel = 'Supplier Network Registration';
      heading = 'Grow with MilJor.';
      supportingCopy =
        'Reach buyers and manage orders with ease.';
      benefits = [
        {
          icon: Building2,
          title: 'Reach Business Buyers',
          desc: 'Access verified commercial kitchens and restaurants across Lahore.',
        },
        {
          icon: Scale,
          title: 'Manage Products and Inventory',
          desc: 'Maintain published catalog specifications, pricing tiers and batch stock.',
        },
        {
          icon: TrendingUp,
          title: 'Receive Organized Purchase Demand',
          desc: 'Predictable scheduled fulfillment with locked orders and escrow deposits.',
        },
      ];
    } else {
      // BUYER
      badgeLabel = 'Collective Buyer Registration';
      heading = 'Buy better, together.';
      supportingCopy =
        'Find suppliers and better wholesale prices.';
      benefits = [
        {
          icon: Layers,
          title: 'Collective Purchasing Power',
          desc: 'Aggregate wholesale volume with nearby kitchens for verified mill rates.',
        },
        {
          icon: ShieldCheck,
          title: 'Trusted Supplier Connections',
          desc: 'Procure directly from vetted mills, importers and authorized distributors.',
        },
        {
          icon: Sparkles,
          title: 'Smarter Procurement Decisions',
          desc: 'Transparent tier pricing, guaranteed fulfillment and escrow payment safety.',
        },
      ];
    }
  } else {
    // forgot-password
    badgeLabel = 'Account Security Verification';
    heading = 'Reset your password.';
    supportingCopy =
      'Get back to your account securely.';
    benefits = [
      {
        icon: ShieldCheck,
        title: 'Encrypted Verification Codes',
        desc: 'Single-use, time-limited cryptographic reset authorization.',
      },
      {
        icon: CheckCircle2,
        title: 'Immediate Session Invalidation',
        desc: 'Existing authentication tokens safely revoked on password change.',
      },
      {
        icon: Layers,
        title: 'Dedicated B2B Protection',
        desc: 'Enterprise-grade account defense for commercial buyers and suppliers.',
      },
    ];
  }

  return (
    <div
      className={`relative p-4 sm:p-6 lg:p-6 xl:p-8 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: colors.bg,
        borderRight: colors.borderRight,
      }}
    >
      {/* Background Hero Layer */}
      {showBackgroundImage && (
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src={heroImage}
            alt="MilJor Commodity Procurement"
            className="w-full h-full object-cover object-center transition-transform duration-700 scale-102"
            style={{
              opacity: colors.imageOpacity,
              mixBlendMode: colors.imageBlend,
            }}
          />
          {/* Subtle gradient overlay tuned specifically for light vs dark */}
          <div
            className="absolute inset-0"
            style={{
              background: colors.imageOverlay,
            }}
          />
        </div>
      )}

      {/* Top Section: Refined Category Badge & Editorial Heading */}
      <div className="relative z-10 space-y-2.5">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-semibold tracking-wide border shadow-2xs"
          style={{
            backgroundColor: colors.badgeBg,
            borderColor: colors.badgeBorder,
            color: colors.badgeText,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: colors.accent }}
          />
          <span>{badgeLabel}</span>
        </div>

        <div className="space-y-1.5">
          <h2
            className="font-display font-bold text-xl sm:text-2xl tracking-tight leading-tight"
            style={{ color: colors.heading }}
          >
            {heading}
          </h2>

          <p
            className="text-xs sm:text-sm font-sans leading-relaxed"
            style={{ color: colors.supporting }}
          >
            {supportingCopy}
          </p>
        </div>
      </div>

      <div className="relative z-10 pt-4 mt-4 border-t" style={{ borderColor: colors.divider }}>
        <p className="text-xs font-medium tracking-wide" style={{ color: colors.secondary }}>
          Mil Kar Khareedo, Behtar Pao.
        </p>
      </div>
    </div>
  );
}

export default AuthHeroPanel;
