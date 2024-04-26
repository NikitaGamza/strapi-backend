import type { Schema, Attribute } from '@strapi/strapi';

export interface AddEduAddEdu extends Schema.Component {
  collectionName: 'components_add_edu_add_edus';
  info: {
    displayName: 'addEdu';
  };
  attributes: {
    addEduName: Attribute.Text & Attribute.Required;
  };
}

export interface CourseFbCourseFb extends Schema.Component {
  collectionName: 'components_course_fb_course_fbs';
  info: {
    displayName: 'courseFb';
  };
  attributes: {
    fbImg: Attribute.Media & Attribute.Required;
    fbImgUrl: Attribute.String & Attribute.Required;
    fbName: Attribute.String & Attribute.Required;
    fbDate: Attribute.Date & Attribute.Required;
    fbRank: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 5;
        },
        number
      >;
    fbText: Attribute.RichText & Attribute.Required;
  };
}

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
  };
  attributes: {
    university: Attribute.String & Attribute.Required;
    degree: Attribute.String & Attribute.Required;
    field: Attribute.String & Attribute.Required;
    year: Attribute.Integer & Attribute.Required;
  };
}

export interface ExperienceExperience extends Schema.Component {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'experience';
  };
  attributes: {
    workPlace: Attribute.String & Attribute.Required;
    specialization: Attribute.String & Attribute.Required;
    startYear: Attribute.Integer & Attribute.Required;
    endYear: Attribute.Integer & Attribute.Required;
  };
}

export interface FeedbacksFeedbacks extends Schema.Component {
  collectionName: 'components_feedbacks_feedbacks';
  info: {
    displayName: 'feedbacks';
    description: '';
  };
  attributes: {
    feedbackImg: Attribute.Media & Attribute.Required;
    feedbackName: Attribute.String & Attribute.Required;
    feedbackText: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    rank: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 5;
        },
        number
      >;
    feedbackDate: Attribute.Date & Attribute.Required;
    feedbackImgUrl: Attribute.String & Attribute.Required;
  };
}

export interface LearnLearn extends Schema.Component {
  collectionName: 'components_learn_learns';
  info: {
    displayName: 'learn';
  };
  attributes: {
    learnText: Attribute.String & Attribute.Required;
  };
}

export interface ProgramProgram extends Schema.Component {
  collectionName: 'components_program_programs';
  info: {
    displayName: 'program';
  };
  attributes: {
    programTitle: Attribute.String & Attribute.Required;
    programDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SocialLinksSocialLinks extends Schema.Component {
  collectionName: 'components_social_links_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    type: Attribute.Enumeration<['youtube', 'vk', 'telegram']>;
    link: Attribute.String & Attribute.Required;
  };
}

export interface SpecializationSpecialization extends Schema.Component {
  collectionName: 'components_specialization_specializations';
  info: {
    displayName: 'specialization';
  };
  attributes: {
    specName: Attribute.String & Attribute.Required;
  };
}

export interface TestRepeatTestRepeat extends Schema.Component {
  collectionName: 'components_test_repeat_test_repeats';
  info: {
    displayName: 'testRepeat';
  };
  attributes: {
    testTextRepeat: Attribute.String & Attribute.Required;
    testazaza: Attribute.String;
  };
}

export interface WorkWork extends Schema.Component {
  collectionName: 'components_work_works';
  info: {
    displayName: 'work';
  };
  attributes: {
    workPlace: Attribute.String & Attribute.Required;
    workTitle: Attribute.String & Attribute.Required;
    startYear: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    endYear: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'add-edu.add-edu': AddEduAddEdu;
      'course-fb.course-fb': CourseFbCourseFb;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'feedbacks.feedbacks': FeedbacksFeedbacks;
      'learn.learn': LearnLearn;
      'program.program': ProgramProgram;
      'social-links.social-links': SocialLinksSocialLinks;
      'specialization.specialization': SpecializationSpecialization;
      'test-repeat.test-repeat': TestRepeatTestRepeat;
      'work.work': WorkWork;
    }
  }
}
