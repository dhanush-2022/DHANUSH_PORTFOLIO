import {
  Activity,
  AppWindow,
  BellRing,
  Bug,
  Crosshair,
  Database,
  Eye,
  FileText,
  Network,
  Radar,
  RefreshCw,
  ScanSearch,
  ScrollText,
  Search,
  Server,
  ShieldCheck,
  Siren,
  Terminal } from
'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'Dhanush K',
  roles: ['SOC Analyst', 'Cybersecurity Analyst'],
  location: 'Salem, India',
  email: 'er.dhanushkumaravel@gmail.com',
  phone: '+91-8610567852',
  phoneHref: 'tel:+918610567852',
<<<<<<< HEAD
  resumeUrl: `${import.meta.env.BASE_URL}Dhanush_Resume21.pdf`
=======
  resumeUrl: '/Dhanush_Resume21.pdf'
>>>>>>> 79a189032710b2f2c955064a2f9fd2d4eff4919e
};

export const navItems = [
{ id: 'home', label: 'Home' },
{ id: 'about', label: 'About' },
{ id: 'skills', label: 'Skills' },
{ id: 'projects', label: 'Projects' },
{ id: 'experience', label: 'Experience' },
{ id: 'certifications', label: 'Certifications' },
{ id: 'contact', label: 'Contact' }];


export const navIds = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];

export const trainingAreas = [
'Security Operations Center practices',
'SIEM monitoring',
'Vulnerability assessment',
'Network security',
'Log analysis',
'Incident investigation',
'Threat hunting',
'Linux administration',
'Web application security testing'];


export const aboutPipeline = ['Monitor', 'Detect', 'Investigate', 'Respond'];

export type Skill = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const skills: Skill[] = [
{
  title: 'SOC Monitoring & Log Analysis',
  description: 'Reviewing system and network logs to surface suspicious activity and anomalies.',
  icon: ScrollText
},
{
  title: 'Incident Detection & Response',
  description: 'Identifying security incidents and supporting structured investigation and response.',
  icon: Siren
},
{
  title: 'Cybersecurity & Pentesting',
  description: 'Penetration testing across web applications and network environments.',
  icon: Bug
},
{
  title: 'Vulnerability Assessment',
  description: 'Identifying and assessing security weaknesses across systems and applications.',
  icon: ScanSearch
},
{
  title: 'Network Security Analysis',
  description: 'Monitoring network environments to identify anomalies and security incidents.',
  icon: Network
},
{
  title: 'SIEM Tools',
  description: 'Centralized log monitoring, event analysis, and alerting with Wazuh SIEM.',
  icon: Database
},
{
  title: 'Linux Administration',
  description: 'Configuring and operating Linux systems for security lab environments.',
  icon: Terminal
},
{
  title: 'Web Application Security Testing',
  description: 'Security testing of web applications, including the WebFoxShield platform.',
  icon: AppWindow
},
{
  title: 'Security Monitoring',
  description: 'Continuous observation of security events across client-server environments.',
  icon: Activity
},
{
  title: 'Threat Hunting',
  description: 'Searching logs and session activity for malicious behavior and attack patterns.',
  icon: Crosshair
}];


export type Tool = {
  id: string;
  name: string;
  role: string;
  icon: LucideIcon;
  x: number;
  y: number;
  hub?: boolean;
};

export const tools: Tool[] = [
{ id: 'kali', name: 'Kali Linux', role: 'Attack simulation', icon: Crosshair, x: 11, y: 22 },
{ id: 'network', name: 'Network Security Tools', role: 'Network analysis', icon: Network, x: 11, y: 78 },
{ id: 'cowrie', name: 'Cowrie', role: 'SSH / Telnet honeypot', icon: Server, x: 37, y: 26 },
{ id: 'linux', name: 'Linux', role: 'Host & lab systems', icon: Terminal, x: 37, y: 80 },
{ id: 'wazuh', name: 'Wazuh', role: 'Security monitoring platform', icon: ShieldCheck, x: 63, y: 50, hub: true },
{ id: 'siem', name: 'SIEM', role: 'Centralized log analysis', icon: Database, x: 89, y: 22 },
{ id: 'web', name: 'Web Security Testing', role: 'Application testing', icon: AppWindow, x: 89, y: 78 }];


export const toolLinks: [string, string][] = [
['kali', 'cowrie'],
['kali', 'network'],
['network', 'linux'],
['linux', 'cowrie'],
['linux', 'wazuh'],
['cowrie', 'wazuh'],
['wazuh', 'siem'],
['wazuh', 'web']];


export type FlowStage = {
  name: string;
  detail: string;
  icon: LucideIcon;
};

export const flowStages: FlowStage[] = [
{
  name: 'Kali Linux',
  detail: 'Attacker machine inside the virtualized lab, used to simulate adversary activity against the exposed service.',
  icon: Terminal
},
{
  name: 'Attack Activity',
  detail: 'Simulated SSH login attempts and attacker interaction directed at the honeypot.',
  icon: Crosshair
},
{
  name: 'Cowrie Honeypot',
  detail: 'Linux-based SSH honeypot that emulates a real service and records every attacker interaction.',
  icon: Server
},
{
  name: 'Log Collection',
  detail: 'Honeypot logs — login attempts, commands, and sessions — are collected for centralized ingestion.',
  icon: FileText
},
{
  name: 'Wazuh SIEM',
  detail: 'Security events are integrated into Wazuh for centralized monitoring and event analysis.',
  icon: Database
},
{
  name: 'Alert',
  detail: 'Matching security events generate alerts that flag suspicious activity for review.',
  icon: BellRing
},
{
  name: 'Threat Analysis',
  detail: 'Alerts and session activity are investigated to identify malicious behavior and attack patterns.',
  icon: ScanSearch
}];


export const projectTags = ['Cowrie', 'Wazuh', 'Kali Linux', 'Linux', 'SSH', 'Virtualized Lab'];

export type ProjectComponent = {
  title: string;
  label: string;
  icon: LucideIcon;
  points: string[];
};

export const projectComponents: ProjectComponent[] = [
{
  title: 'Cowrie Honeypot',
  label: 'Deception layer',
  icon: Server,
  points: ['SSH/Telnet honeypot', 'Attacker interaction capture', 'Login attempt monitoring', 'Command/session collection']
},
{
  title: 'Wazuh SIEM',
  label: 'Monitoring layer',
  icon: Database,
  points: ['Centralized log monitoring', 'Security event analysis', 'Alert generation', 'Incident investigation']
},
{
  title: 'Threat Analysis',
  label: 'Analysis layer',
  icon: Search,
  points: [
  'Malicious behavior identification',
  'Attack pattern analysis',
  'Session activity analysis',
  'Security event investigation']

}];


export const experience = {
  role: 'Cybersecurity Intern',
  company: 'ThinkInfo Expert Solutions',
  period: 'November 2025 – March 2026',
  shortPeriod: 'Nov 2025 — Mar 2026',
  responsibilities: [
  'Practical SOC and network security monitoring',
  'Vulnerability assessment',
  'Penetration testing of web applications and network environments',
  'Security testing activities for the WebFoxShield cybersecurity platform',
  'Wazuh client-server log monitoring',
  'Identification of anomalies and security incidents']

};

export const education = {
  degree: 'Bachelor of Engineering (B.E)',
  field: 'Computer Science and Engineering',
  institution: 'Mahendra College of Engineering',
  location: 'Salem, India',
  period: '2022 – 2026'
};

export const certification = {
  title: 'Cybersecurity Professional Training',
  issuer: 'ThinkInfo Experts Solutions',
  areas: [
  'Network Security',
  'Ethical Hacking',
  'Vulnerability Assessment',
  'SIEM',
  'Linux',
  'Incident Response',
  'Security Monitoring']

};

export type MindsetStage = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const mindsetStages: MindsetStage[] = [
{ name: 'Observe', description: 'Maintain visibility across logs, hosts, and network activity.', icon: Eye },
{ name: 'Detect', description: 'Recognize anomalies and suspicious events as they surface.', icon: Radar },
{ name: 'Analyze', description: 'Assess context, scope, and severity of each event.', icon: ScanSearch },
{ name: 'Investigate', description: 'Trace sessions and activity to establish what happened.', icon: Search },
{ name: 'Respond', description: 'Escalate and act to contain and resolve incidents.', icon: ShieldCheck },
{ name: 'Improve', description: 'Feed findings back into monitoring and detection.', icon: RefreshCw }];