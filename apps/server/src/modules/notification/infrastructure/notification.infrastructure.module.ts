import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationMvpProjectSubscriber } from './subscribers/notification.mvpProject.subscriber'

import { NotificationProductRequirementSubscriber } from './subscribers/notification.productRequirement.subscriber'

import { NotificationProductRequirementDocumentSubscriber } from './subscribers/notification.productRequirementDocument.subscriber'

import { NotificationUiDesignSubscriber } from './subscribers/notification.uiDesign.subscriber'

import { NotificationTechnicalDesignDocumentSubscriber } from './subscribers/notification.technicalDesignDocument.subscriber'

import { NotificationTestingSubscriber } from './subscribers/notification.testing.subscriber'

import { NotificationDeploymentSubscriber } from './subscribers/notification.deployment.subscriber'

import { NotificationFrontendSubscriber } from './subscribers/notification.frontend.subscriber'

import { NotificationBackendSubscriber } from './subscribers/notification.backend.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationMvpProjectSubscriber,

    NotificationProductRequirementSubscriber,

    NotificationProductRequirementDocumentSubscriber,

    NotificationUiDesignSubscriber,

    NotificationTechnicalDesignDocumentSubscriber,

    NotificationTestingSubscriber,

    NotificationDeploymentSubscriber,

    NotificationFrontendSubscriber,

    NotificationBackendSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
