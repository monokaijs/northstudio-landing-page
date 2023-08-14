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
  xl?: boolean;
  type?: 'xl' | 'xl2' | 'xl3';
  onboarding: number;
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
  photo: 'https://i.imgur.com/S49O9CV.jpg',
  xl: true,
  onboarding: 2020,
}, {
  name: 'Le Xuan Ngoc',
  position: 'Lead Mobile Development',
  skills: [
    'Mobile Development',
    'Frontend Development',
  ],
  education: {
    level: 'College',
    school: 'FPT Polytechnics',
    graduationYear: 2021
  },
  awards: [],
  certificates: [],
  photo: 'https://i.imgur.com/ncJZF7p.jpg',
  xl: true,
  type: 'xl2',
  onboarding: 2021,
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
  photo: 'https://i.imgur.com/OlH8s66.jpg',
  onboarding: 2022,
}, {
  name: 'Hoang Ngoc Dung',
  position: 'Frontend Developer',
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
  photo: 'https://i.imgur.com/C3b5S60.jpg',
  onboarding: 2022,
}, {
  name: 'Vo Thi Phuong Truc',
  position: 'Content Writer',
  skills: [
    'Content',
    'Marketing'
  ],
  education: {
    level: 'Bachelor',
    school: '',
    graduationYear: 2023
  },
  awards: [],
  certificates: [],
  photo: 'https://i.imgur.com/7UnIEyD.jpg',
  onboarding: 2023,
}, {
  name: 'Nguyen Van Duc',
  position: 'Backend Developer',
  skills: [
    'NodeJs',
    'NestJs',
    'NextJs',
    'MongoDB'
  ],
  education: {
    level: 'Bachelor',
    school: '',
    graduationYear: 2023
  },
  awards: [],
  certificates: [],
  photo: 'https://i.imgur.com/nx0zktQ.jpg',
  onboarding: 2023,
}, {
  name: 'Le Vo Lan Nhi',
  position: 'Designer',
  skills: [
    'Figma',
    'UI/UX'
  ],
  education: {
    level: '',
    school: '',
    graduationYear: 2023
  },
  awards: [],
  certificates: [],
  photo: 'https://i.imgur.com/7KyIEZj.png',
  onboarding: 2021,
  xl: true,
  type: 'xl2'
}, {
  name: 'Ta Thi Huong',
  position: 'Tester',
  skills: [
    'Testing',
    'Documenting'
  ],
  education: {
    level: 'Bachelor',
    school: '',
    graduationYear: 2023
  },
  awards: [],
  certificates: [],
  photo: 'https://i.imgur.com/QbX3ag8.jpg',
  onboarding: 2023,
}, {
  name: 'Ho Huu Phuoc',
  position: 'Frontend Developer',
  skills: [
    'React.Js'
  ],
  education: {
    level: 'College',
    school: 'FPT Polytechnics',
    graduationYear: 2023
  },
  awards: [],
  certificates: [],
  photo: 'https://i.imgur.com/7um7wZk.png',
  onboarding: 2023,
}, {
  name: 'Nguyen Minh Duc',
  position: 'Mobile Developer',
  skills: [
    'React Native'
  ],
  education: {
    level: 'Bachelor',
    school: 'FPT',
    graduationYear: 2023
  },
  awards: [],
  certificates: [],
  photo: 'https://i.imgur.com/EIE4xD0.jpg',
  onboarding: 2023,
}, {
  name: 'Nguyen Duy Tien',
  position: 'Frontend Developer',
  skills: [
    'React.Js'
  ],
  education: {
    level: 'Bachelor',
    school: 'FPT',
    graduationYear: 2023
  },
  awards: [],
  certificates: [],
  photo: 'https://i.imgur.com/C7kkL8B.jpg',
  onboarding: 2022,
}]

export default function TeamPage() {
  return <div className={styles.outer}>
    <div className={styles.content}>
      <SectionTitle>
        Our Team
      </SectionTitle>

      <div className={styles.teamContainer}>
        {members.map(mem => (
          <div
            className={`${styles.member} ${mem.xl ? styles[mem.type || 'xl'] : ''}`}
            style={{
              backgroundImage: `url(${mem.photo})`
            }}
          >
            <div className={styles.experience}>
              {new Date().getFullYear() - mem.onboarding + 1} <span>years</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}
