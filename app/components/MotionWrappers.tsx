'use client'

import { motion, type Variants, type Transition } from 'framer-motion'
import { type ReactNode } from 'react'

// Smooth spring transition for hover effects
const smoothSpring: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
}

const gentleEase: Transition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth feel
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  variant?: 'fadeUp' | 'fadeIn' | 'scaleIn'
  delay?: number
}

const variants = {
  fadeUp,
  fadeIn,
  scaleIn,
}

export function AnimateOnScroll({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
}: AnimateOnScrollProps) {
  const selectedVariant = variants[variant]
  const customVariant: Variants = delay
    ? {
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            ...(typeof selectedVariant.visible === 'object' &&
            'transition' in selectedVariant.visible
              ? selectedVariant.visible.transition
              : {}),
            delay,
          },
        },
      }
    : selectedVariant

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={customVariant}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ children, className = '' }: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  enableHover?: boolean
}

export function StaggerItem({ children, className = '', enableHover = true }: StaggerItemProps) {
  return (
    <motion.div 
      variants={fadeUp} 
      className={className}
      whileHover={enableHover ? { 
        y: -8, 
        transition: smoothSpring 
      } : undefined}
    >
      {children}
    </motion.div>
  )
}

// Smooth hover card with lift and subtle glow
interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverY?: number
}

export function HoverCard({ 
  children, 
  className = '', 
  hoverScale = 1.02,
  hoverY = -6 
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: hoverY, 
        scale: hoverScale,
        transition: smoothSpring
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.div>
  )
}

// Gentle button hover
interface HoverButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
}

export function HoverButton({ 
  children, 
  className = '', 
  onClick,
  ariaLabel 
}: HoverButtonProps) {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ 
        scale: 1.03,
        transition: gentleEase
      }}
      whileTap={{ 
        scale: 0.97,
        transition: { duration: 0.1 }
      }}
    >
      {children}
    </motion.button>
  )
}
