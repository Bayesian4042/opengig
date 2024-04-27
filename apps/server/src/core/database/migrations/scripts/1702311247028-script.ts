import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password", "userType", "specialization", "techStacks") VALUES ('658e9b53-0060-446f-9cf8-7791b2cfbcd6', '1Royce_Lind@hotmail.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'manager', 'Frontend Developer', 'React Node.js');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password", "userType", "specialization", "techStacks") VALUES ('c344f56c-bf0d-4ed5-b62a-05bfbcad2ee6', '10Emmet.Block17@gmail.com', 'Eva Brown', 'https://i.imgur.com/YfJQV5z.png?id=12', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'manager', 'UIUX Designer', 'React Node.js');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password", "userType", "specialization", "techStacks") VALUES ('fb4bfa7e-d9f8-4511-a498-6c3982dc2e7a', '28Orland.Cummings19@hotmail.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=30', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'manager', 'Backend Developer', 'Ruby Rails');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password", "userType", "specialization", "techStacks") VALUES ('5fe581b9-ed9f-4277-a39e-b1fe0f1af05c', '37Omer_Reynolds@gmail.com', 'Carol Martinez', 'https://i.imgur.com/YfJQV5z.png?id=39', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'developer', 'Project Manager', 'Ruby Rails');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password", "userType", "specialization", "techStacks") VALUES ('37c10863-65ef-4e2b-8abf-5202de845d13', '46Sanford.Kuhn@yahoo.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=48', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'user', 'UIUX Designer', 'Java Spring');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password", "userType", "specialization", "techStacks") VALUES ('bc203b55-1107-4865-9d91-ae66f1c79239', '55Claudie_Spencer91@hotmail.com', 'Carol Martinez', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'admin', 'Project Manager', 'Java Spring');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password", "userType", "specialization", "techStacks") VALUES ('b4372f8a-3d8d-4723-b619-b6118a4cc521', '64Loyal_Connelly51@yahoo.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'manager', 'Frontend Developer', 'Java Spring');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password", "userType", "specialization", "techStacks") VALUES ('553f7a59-86b4-4917-934f-45623aa2e662', '73Broderick.Ortiz22@hotmail.com', 'Eva Brown', 'https://i.imgur.com/YfJQV5z.png?id=75', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'admin', 'Project Manager', 'Ruby Rails');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password", "userType", "specialization", "techStacks") VALUES ('791ddd84-f753-4758-abf7-8c52fda51fb3', '82Hilda_Williamson37@yahoo.com', 'Bob Johnson', 'https://i.imgur.com/YfJQV5z.png?id=84', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'product_team_member', 'Frontend Developer', 'Java Spring');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('12079208-7c92-4424-a0aa-260334c1dc4a', 'Task Completion Alert', 'A new MVP requirement has been submitted by a user.', 'John Doe', '94Maximillia.Brown@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=95', 'https://i.imgur.com/YfJQV5z.png?id=96', '791ddd84-f753-4758-abf7-8c52fda51fb3');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('56eba38f-374e-42a8-bac1-63690e33da33', 'Development Stage Updated', 'The development stage for Project X has been updated.', 'Emma Wilson', '101Adolfo_Goldner77@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=102', 'https://i.imgur.com/YfJQV5z.png?id=103', '791ddd84-f753-4758-abf7-8c52fda51fb3');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('8a995c97-5761-446b-b719-c1c73a552278', 'PRD Feedback Received', 'Approval is required to proceed to the next development stage.', 'Alice Johnson', '108Bernie.Thiel85@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=109', 'https://i.imgur.com/YfJQV5z.png?id=110', 'fb4bfa7e-d9f8-4511-a498-6c3982dc2e7a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('49812927-affb-4456-a832-48ed20a166fe', 'PRD Feedback Received', 'Feedback has been provided on the Product Requirement Document.', 'Emma Wilson', '115Bertram.Stark@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=116', 'https://i.imgur.com/YfJQV5z.png?id=117', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('93d78eb3-3d45-4182-888b-394b1e899cb7', 'Development Stage Updated', 'Approval is required to proceed to the next development stage.', 'Jane Smith', '122Noel53@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=123', 'https://i.imgur.com/YfJQV5z.png?id=124', '553f7a59-86b4-4917-934f-45623aa2e662');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d02e478a-f752-4a6e-bd57-0a571213edff', 'PRD Feedback Received', 'The development stage for Project X has been updated.', 'Alice Johnson', '129Jack_Heidenreich@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=130', 'https://i.imgur.com/YfJQV5z.png?id=131', 'bc203b55-1107-4865-9d91-ae66f1c79239');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('c2a0441e-856b-4799-b109-cd55bc4f06ac', 'PRD Feedback Received', 'Approval is required to proceed to the next development stage.', 'Jane Smith', '136Yessenia_Baumbach51@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=137', 'https://i.imgur.com/YfJQV5z.png?id=138', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5cb90f7e-44ac-49df-a35b-6e43c182a0b0', 'Development Stage Updated', 'A new MVP requirement has been submitted by a user.', 'John Doe', '143Carolanne.Wunsch20@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=144', 'https://i.imgur.com/YfJQV5z.png?id=145', '553f7a59-86b4-4917-934f-45623aa2e662');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('746f33dc-b6e8-4ed9-a994-f0a56af3da87', 'Task Completion Alert', 'The development stage for Project X has been updated.', 'Alice Johnson', '150Lora64@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=151', 'https://i.imgur.com/YfJQV5z.png?id=152', '658e9b53-0060-446f-9cf8-7791b2cfbcd6');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d9dea70d-61e1-4c74-802e-e362be5ce43c', 'PRD Feedback Received', 'Approval is required to proceed to the next development stage.', 'Jane Smith', '157Olen.Robel94@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=158', 'https://i.imgur.com/YfJQV5z.png?id=159', 'bc203b55-1107-4865-9d91-ae66f1c79239');

INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('03411fac-8497-4da6-8579-af87e3728cf1', 'DeltaData Analytics', 'Advanced analytics suite for interpreting complex data sets in realtime.');
INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('122f2dc9-9a9c-4e09-8cea-6526632dc121', 'AlphaTech Redesign', 'A complete redesign of the AlphaTech corporate website to enhance user experience.');
INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('81ba2890-f6c8-4250-a628-b0cb32635ab5', 'DeltaData Analytics', 'Advanced analytics suite for interpreting complex data sets in realtime.');
INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('4cbf9b6f-3ccc-4d9b-b7f2-f15ef5cbd293', 'EpsilonHealth Tracker', 'A health tracking system focused on improving user wellness and fitness monitoring.');
INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('49e181f1-83cc-4795-8d8b-1f3f0d94a999', 'GammaStream Tool', 'A new platform aimed at providing streamlined beta testing services.');
INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('2d4e49c1-83b2-4e6c-aa3b-40390f4801e7', 'DeltaData Analytics', 'A tool designed for realtime streaming and data processing.');
INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('ab090b3c-39c6-47c3-960d-fb87da7b48ec', 'DeltaData Analytics', 'A tool designed for realtime streaming and data processing.');
INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('5113ae3b-7616-4ecf-9472-c0a0bdbd225c', 'GammaStream Tool', 'Advanced analytics suite for interpreting complex data sets in realtime.');
INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('6df0a6ef-ce32-4848-a51c-accd7e9bf187', 'AlphaTech Redesign', 'A health tracking system focused on improving user wellness and fitness monitoring.');
INSERT INTO "mvp_project" ("id", "name", "description") VALUES ('2264127a-6454-42a7-b6ec-88d05cc42953', 'DeltaData Analytics', 'A health tracking system focused on improving user wellness and fitness monitoring.');

INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('72cbff67-3e50-46f4-8f3e-f288ea93e0cf', 'Integrate payment gateway for seamless transactions', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('a81978cb-0d2b-46a8-b5de-956d851b3412', 'Enable multilanguage support for global users', '4cbf9b6f-3ccc-4d9b-b7f2-f15ef5cbd293');
INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('28d2866b-809e-4b7b-9260-6675e97ca3a1', 'Implement advanced analytics for user behavior tracking', '122f2dc9-9a9c-4e09-8cea-6526632dc121');
INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('acdd570f-e703-4691-bba7-4befd8b6488e', 'Enable multilanguage support for global users', '2264127a-6454-42a7-b6ec-88d05cc42953');
INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('02d7971d-b997-4228-b129-715462e5d124', 'Implement advanced analytics for user behavior tracking', 'ab090b3c-39c6-47c3-960d-fb87da7b48ec');
INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('aff60e0a-484d-4a11-a303-ea862c361a95', 'Create a scalable database architecture for high traffic', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('a87f239c-e41c-418f-b1cc-c92fefd446ad', 'Integrate payment gateway for seamless transactions', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('930377a5-297e-4001-8c70-5b3501cefae2', 'Develop a userfriendly mobile app interface', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('566d64fe-02d3-4104-8392-40731d5cae59', 'Create a scalable database architecture for high traffic', '6df0a6ef-ce32-4848-a51c-accd7e9bf187');
INSERT INTO "product_requirement" ("id", "requirement", "mvpProjectId") VALUES ('a1196537-669f-4f8c-b56d-29c640607688', 'Create a scalable database architecture for high traffic', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');

INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('e3585ab9-b423-4d34-83cc-5d0b169c7c06', 'https://i.imgur.com/YfJQV5z.png?id=211', '81ba2890-f6c8-4250-a628-b0cb32635ab5');
INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('3f36bc2e-d6b8-4159-a2e4-47bf5f2d7812', 'https://i.imgur.com/YfJQV5z.png?id=213', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('d435250f-fbab-4539-98d8-0e6ce871cffc', 'https://i.imgur.com/YfJQV5z.png?id=215', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('661223d5-31e8-47df-9225-bee9245f6b54', 'https://i.imgur.com/YfJQV5z.png?id=217', '122f2dc9-9a9c-4e09-8cea-6526632dc121');
INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('6aeccc93-5602-41df-a0eb-dfbf388c1ff1', 'https://i.imgur.com/YfJQV5z.png?id=219', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('71b26352-336c-4c93-af5c-0bf749c2d2a9', 'https://i.imgur.com/YfJQV5z.png?id=221', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('db9c37af-2bae-42ce-abd4-03c08fcb651f', 'https://i.imgur.com/YfJQV5z.png?id=223', '6df0a6ef-ce32-4848-a51c-accd7e9bf187');
INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('5f5446f8-24fc-4b01-a922-ef44723f2255', 'https://i.imgur.com/YfJQV5z.png?id=225', '81ba2890-f6c8-4250-a628-b0cb32635ab5');
INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('7cea94dd-eb41-449f-911c-9bb4e1158e07', 'https://i.imgur.com/YfJQV5z.png?id=227', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "product_requirement_document" ("id", "documentUrl", "mvpProjectId") VALUES ('cc12333c-a2d7-4aa6-a0da-c849a9ccc850', 'https://i.imgur.com/YfJQV5z.png?id=229', '4cbf9b6f-3ccc-4d9b-b7f2-f15ef5cbd293');

INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('178524c7-7034-4882-b34e-802eb628e0dd', 'https://i.imgur.com/YfJQV5z.png?id=231', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('3508ae67-5ba2-40b4-bff0-ed85a48638ca', 'https://i.imgur.com/YfJQV5z.png?id=233', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('ca3ddb1e-2158-49d2-8036-7d1334d23646', 'https://i.imgur.com/YfJQV5z.png?id=235', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('740e8843-67f4-40ff-8c16-5b6e83752bf2', 'https://i.imgur.com/YfJQV5z.png?id=237', '6df0a6ef-ce32-4848-a51c-accd7e9bf187');
INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('b12de897-f1dd-4636-8e9e-d1204b3ffb5f', 'https://i.imgur.com/YfJQV5z.png?id=239', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('a3a26200-ffb5-486c-b84b-ac2666929688', 'https://i.imgur.com/YfJQV5z.png?id=241', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('8dc60fb2-cf6f-4d3d-86c0-ec959b684208', 'https://i.imgur.com/YfJQV5z.png?id=243', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('6cc3f8f6-06df-4c07-8cd1-dcaed449eb01', 'https://i.imgur.com/YfJQV5z.png?id=245', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('fdd189d7-e309-4e56-ab96-ea0f237ed3b9', 'https://i.imgur.com/YfJQV5z.png?id=247', '4cbf9b6f-3ccc-4d9b-b7f2-f15ef5cbd293');
INSERT INTO "ui_design" ("id", "designUrl", "mvpProjectId") VALUES ('c657c196-48ef-4d8d-96f3-550ed7406a0f', 'https://i.imgur.com/YfJQV5z.png?id=249', '2264127a-6454-42a7-b6ec-88d05cc42953');

INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('3194c324-8dca-4c5f-9029-dadf14521039', 'https://i.imgur.com/YfJQV5z.png?id=251', 'https://i.imgur.com/YfJQV5z.png?id=252', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('fc3905e0-00b0-46a2-9de6-936a58ec31b2', 'https://i.imgur.com/YfJQV5z.png?id=254', 'https://i.imgur.com/YfJQV5z.png?id=255', '4cbf9b6f-3ccc-4d9b-b7f2-f15ef5cbd293');
INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('7007333d-3c59-4698-99b9-dd6b31cdc6e6', 'https://i.imgur.com/YfJQV5z.png?id=257', 'https://i.imgur.com/YfJQV5z.png?id=258', '6df0a6ef-ce32-4848-a51c-accd7e9bf187');
INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('b249fd74-f538-4728-aa24-c3e0f5d16141', 'https://i.imgur.com/YfJQV5z.png?id=260', 'https://i.imgur.com/YfJQV5z.png?id=261', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('13eb5c8d-a5fe-4574-8848-96bbfeda11ec', 'https://i.imgur.com/YfJQV5z.png?id=263', 'https://i.imgur.com/YfJQV5z.png?id=264', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('bd2d8e4b-5bd2-4835-a7da-c8aed2d294f2', 'https://i.imgur.com/YfJQV5z.png?id=266', 'https://i.imgur.com/YfJQV5z.png?id=267', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('977356eb-c873-468c-b57c-31de426d467f', 'https://i.imgur.com/YfJQV5z.png?id=269', 'https://i.imgur.com/YfJQV5z.png?id=270', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('38a34403-c5ad-41c1-b458-4e1900f3903e', 'https://i.imgur.com/YfJQV5z.png?id=272', 'https://i.imgur.com/YfJQV5z.png?id=273', '6df0a6ef-ce32-4848-a51c-accd7e9bf187');
INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('7b4f2b8f-134b-493c-96bd-5530ade0e234', 'https://i.imgur.com/YfJQV5z.png?id=275', 'https://i.imgur.com/YfJQV5z.png?id=276', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "technical_design_document" ("id", "highLevelDesignUrl", "lowLevelDesignUrl", "mvpProjectId") VALUES ('aa399cf7-c6bb-439d-b8ac-5768de8433f7', 'https://i.imgur.com/YfJQV5z.png?id=278', 'https://i.imgur.com/YfJQV5z.png?id=279', '2264127a-6454-42a7-b6ec-88d05cc42953');

INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('8474a10e-5a6a-4d37-8d2d-c810ce8ac31c', 'https://i.imgur.com/YfJQV5z.png?id=281', 'https://i.imgur.com/YfJQV5z.png?id=282', '122f2dc9-9a9c-4e09-8cea-6526632dc121');
INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('c0f5e628-f546-4e55-aae3-6a058baa6338', 'https://i.imgur.com/YfJQV5z.png?id=284', 'https://i.imgur.com/YfJQV5z.png?id=285', 'ab090b3c-39c6-47c3-960d-fb87da7b48ec');
INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('38ce8569-2a94-4a2b-993a-7271c3de5fa9', 'https://i.imgur.com/YfJQV5z.png?id=287', 'https://i.imgur.com/YfJQV5z.png?id=288', 'ab090b3c-39c6-47c3-960d-fb87da7b48ec');
INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('cdb6d4a7-3fde-4d73-83b6-99eeaa324b6c', 'https://i.imgur.com/YfJQV5z.png?id=290', 'https://i.imgur.com/YfJQV5z.png?id=291', '122f2dc9-9a9c-4e09-8cea-6526632dc121');
INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('0181ca33-8de3-4ffb-a475-9066feff6052', 'https://i.imgur.com/YfJQV5z.png?id=293', 'https://i.imgur.com/YfJQV5z.png?id=294', '2264127a-6454-42a7-b6ec-88d05cc42953');
INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('c71a1ada-d53d-4f8e-af0d-93014f3d5af5', 'https://i.imgur.com/YfJQV5z.png?id=296', 'https://i.imgur.com/YfJQV5z.png?id=297', '2d4e49c1-83b2-4e6c-aa3b-40390f4801e7');
INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('f4ef8091-423d-4b5b-b786-df0b9dc9f654', 'https://i.imgur.com/YfJQV5z.png?id=299', 'https://i.imgur.com/YfJQV5z.png?id=300', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('b3dac0a4-b7ed-475a-83e3-315ab78648df', 'https://i.imgur.com/YfJQV5z.png?id=302', 'https://i.imgur.com/YfJQV5z.png?id=303', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('6035363d-12b8-4b45-a0bb-a403923d14f6', 'https://i.imgur.com/YfJQV5z.png?id=305', 'https://i.imgur.com/YfJQV5z.png?id=306', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
INSERT INTO "testing" ("id", "testPlanDocumentUrl", "testCasesDocumentUrl", "mvpProjectId") VALUES ('31fac736-d4cf-429b-b09d-1217dfd1b661', 'https://i.imgur.com/YfJQV5z.png?id=308', 'https://i.imgur.com/YfJQV5z.png?id=309', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');

INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('6fe0a112-2152-4769-ac32-8c4c7ccabe4f', 'https://i.imgur.com/YfJQV5z.png?id=311', 'https://i.imgur.com/YfJQV5z.png?id=312', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('7fbfc995-3943-445e-add0-220504268c44', 'https://i.imgur.com/YfJQV5z.png?id=314', 'https://i.imgur.com/YfJQV5z.png?id=315', '2264127a-6454-42a7-b6ec-88d05cc42953');
INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('d5b183c9-1447-4459-8b08-601af4c93d7c', 'https://i.imgur.com/YfJQV5z.png?id=317', 'https://i.imgur.com/YfJQV5z.png?id=318', '03411fac-8497-4da6-8579-af87e3728cf1');
INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('b2cdb122-0a08-4b2f-8533-f155ff4485ce', 'https://i.imgur.com/YfJQV5z.png?id=320', 'https://i.imgur.com/YfJQV5z.png?id=321', '4cbf9b6f-3ccc-4d9b-b7f2-f15ef5cbd293');
INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('a4675e30-0947-4b68-b7c4-53d93d91b561', 'https://i.imgur.com/YfJQV5z.png?id=323', 'https://i.imgur.com/YfJQV5z.png?id=324', '2d4e49c1-83b2-4e6c-aa3b-40390f4801e7');
INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('9c7c290b-aa08-41b8-ac27-f483cce21e8b', 'https://i.imgur.com/YfJQV5z.png?id=326', 'https://i.imgur.com/YfJQV5z.png?id=327', 'ab090b3c-39c6-47c3-960d-fb87da7b48ec');
INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('c6215b2a-03db-44fd-8b2c-bafdb11c4767', 'https://i.imgur.com/YfJQV5z.png?id=329', 'https://i.imgur.com/YfJQV5z.png?id=330', 'ab090b3c-39c6-47c3-960d-fb87da7b48ec');
INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('ee25948d-50b3-4648-8ee5-dee2e11f82ae', 'https://i.imgur.com/YfJQV5z.png?id=332', 'https://i.imgur.com/YfJQV5z.png?id=333', '2264127a-6454-42a7-b6ec-88d05cc42953');
INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('8c604e93-e6ef-41c4-b220-bd9867b0b2c2', 'https://i.imgur.com/YfJQV5z.png?id=335', 'https://i.imgur.com/YfJQV5z.png?id=336', '2264127a-6454-42a7-b6ec-88d05cc42953');
INSERT INTO "deployment" ("id", "deploymentGuideUrl", "deploymentScriptUrl", "mvpProjectId") VALUES ('b5d6f6bb-3e06-4594-9584-b5f3aa2a7cb2', 'https://i.imgur.com/YfJQV5z.png?id=338', 'https://i.imgur.com/YfJQV5z.png?id=339', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');

INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('629581b2-9abd-48d0-bde7-dc71ad57d428', 'https://i.imgur.com/YfJQV5z.png?id=341', 'https://i.imgur.com/YfJQV5z.png?id=342', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('91a1c90b-41e2-47bb-8b5c-659f914cd4c1', 'https://i.imgur.com/YfJQV5z.png?id=344', 'https://i.imgur.com/YfJQV5z.png?id=345', '81ba2890-f6c8-4250-a628-b0cb32635ab5');
INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('0bc38884-1a72-422a-8138-45624c7f8dec', 'https://i.imgur.com/YfJQV5z.png?id=347', 'https://i.imgur.com/YfJQV5z.png?id=348', '6df0a6ef-ce32-4848-a51c-accd7e9bf187');
INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('4f0d086a-769f-4b0a-af94-e03db0544fdd', 'https://i.imgur.com/YfJQV5z.png?id=350', 'https://i.imgur.com/YfJQV5z.png?id=351', '4cbf9b6f-3ccc-4d9b-b7f2-f15ef5cbd293');
INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('64ccfb43-8c88-4636-8486-a7b2989efd7b', 'https://i.imgur.com/YfJQV5z.png?id=353', 'https://i.imgur.com/YfJQV5z.png?id=354', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('e5524ab1-78f0-4351-b7e8-48ce00f8cdb7', 'https://i.imgur.com/YfJQV5z.png?id=356', 'https://i.imgur.com/YfJQV5z.png?id=357', 'ab090b3c-39c6-47c3-960d-fb87da7b48ec');
INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('bc14a144-2541-48c3-b6bd-54ec5a29a744', 'https://i.imgur.com/YfJQV5z.png?id=359', 'https://i.imgur.com/YfJQV5z.png?id=360', '81ba2890-f6c8-4250-a628-b0cb32635ab5');
INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('ae454463-a6ec-4c5f-9cf4-51416fb902b9', 'https://i.imgur.com/YfJQV5z.png?id=362', 'https://i.imgur.com/YfJQV5z.png?id=363', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('d8dc7716-b7f5-4db1-9d1d-6ce09ac65280', 'https://i.imgur.com/YfJQV5z.png?id=365', 'https://i.imgur.com/YfJQV5z.png?id=366', 'ab090b3c-39c6-47c3-960d-fb87da7b48ec');
INSERT INTO "frontend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('ae94c959-2afb-4d18-85ba-b1c40d5f3249', 'https://i.imgur.com/YfJQV5z.png?id=368', 'https://i.imgur.com/YfJQV5z.png?id=369', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');

INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('88d1dabd-b112-486b-bb5a-9765a0958a7a', 'https://i.imgur.com/YfJQV5z.png?id=371', 'https://i.imgur.com/YfJQV5z.png?id=372', '6df0a6ef-ce32-4848-a51c-accd7e9bf187');
INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('a61d7b4e-2de5-4bd6-8b2f-a23c6f5d0721', 'https://i.imgur.com/YfJQV5z.png?id=374', 'https://i.imgur.com/YfJQV5z.png?id=375', '81ba2890-f6c8-4250-a628-b0cb32635ab5');
INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('82d4e673-7132-475d-91e9-90d24f25617e', 'https://i.imgur.com/YfJQV5z.png?id=377', 'https://i.imgur.com/YfJQV5z.png?id=378', '122f2dc9-9a9c-4e09-8cea-6526632dc121');
INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('c25893dc-ef06-4b7b-a4f3-f687593df0a9', 'https://i.imgur.com/YfJQV5z.png?id=380', 'https://i.imgur.com/YfJQV5z.png?id=381', '2264127a-6454-42a7-b6ec-88d05cc42953');
INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('3a73748a-7cac-4104-9a21-862df67e0051', 'https://i.imgur.com/YfJQV5z.png?id=383', 'https://i.imgur.com/YfJQV5z.png?id=384', '6df0a6ef-ce32-4848-a51c-accd7e9bf187');
INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('12462be9-cc93-4e1d-8ce5-f988501e12ae', 'https://i.imgur.com/YfJQV5z.png?id=386', 'https://i.imgur.com/YfJQV5z.png?id=387', '4cbf9b6f-3ccc-4d9b-b7f2-f15ef5cbd293');
INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('5ba98959-b6ae-4bda-80a7-0f3423478397', 'https://i.imgur.com/YfJQV5z.png?id=389', 'https://i.imgur.com/YfJQV5z.png?id=390', '2264127a-6454-42a7-b6ec-88d05cc42953');
INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('7e14413e-8a30-4266-a323-d8b310716195', 'https://i.imgur.com/YfJQV5z.png?id=392', 'https://i.imgur.com/YfJQV5z.png?id=393', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('27e16afd-6ee1-4564-ad73-5d7b8e4c5aae', 'https://i.imgur.com/YfJQV5z.png?id=395', 'https://i.imgur.com/YfJQV5z.png?id=396', '49e181f1-83cc-4795-8d8b-1f3f0d94a999');
INSERT INTO "backend" ("id", "repositoryUrl", "documentationUrl", "mvpProjectId") VALUES ('7691f481-e3cf-4c6d-8f78-e1a1a3208135', 'https://i.imgur.com/YfJQV5z.png?id=398', 'https://i.imgur.com/YfJQV5z.png?id=399', '5113ae3b-7616-4ecf-9472-c0a0bdbd225c');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
