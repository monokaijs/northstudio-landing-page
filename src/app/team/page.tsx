import React from "react";
import styles from "./styles.module.scss";
import SectionTitle from "@/components/shared/SectionTitle";

interface Member {
  name: string;
  position: string;
  skills: string[];
  certificates: string[];
  education?: {
    level: string;
    school: string;
    graduationYear: number;
  };
  awards: string[];
  photo: string;
  coverPhoto?: string;
}

const members: Member[] = [{
  name: 'Anh Nhan Nguyen',
  position: 'System Engineer',
  skills: [
    'UI/UX',
    'Full-stack Web Development',
    'Mobile Development',
    'Software Architect',
    'IoT', 'Hardware', 'Data Engineer'
  ],
  education: {
    level: 'bachelor',
    school: 'University of Greenwich Vietnam',
    graduationYear: 2022
  },
  awards: [],
  certificates: [],
  photo: '',
}, {
  name: 'Le Xuan Ngoc',
  position: 'Lead Mobile Development',
  skills: [
    'Mobile Development',
    'Frontend Development',
  ],
  education: {
    level: 'bachelor',
    school: 'FPT Polytechnics',
    graduationYear: 2021
  },
  awards: [],
  certificates: [],
  photo: '',
}, {
  name: 'Nguyen Van Quyet',
  position: 'Mobile Developer',
  skills: [
    'UI/UX',
    'Mobile Development',
  ],
  education: {
    level: 'engineer',
    school: 'Trai Cai Nghien No. 07',
    graduationYear: 2029
  },
  awards: [],
  certificates: [],
  photo: '',
}]

export default function TeamPage() {
  return <div className={styles.outer}>
    <div className={styles.content}>
      <SectionTitle>
        Our Team
      </SectionTitle>

      <div className={styles.teamContainer}>
        <div className={`${styles.member}`}>
          One
        </div>
        <div className={`${styles.member}`}>
          Two
        </div>
        <div className={`${styles.member}`}>
          Three
        </div>
        <div className={`${styles.member}`}>
          Four
        </div>
        <div className={`${styles.member}`}>
          Five
        </div>
        <div className={`${styles.member}`}>
          Six
        </div>
        <div className={`${styles.member}`}>
          One
        </div>
        <div className={`${styles.member}`}>
          One
        </div>
        <div className={`${styles.member}`}>
          One
        </div>
        <div className={`${styles.member}`}>
          One
        </div>
      </div>
    </div>
  </div>
}
