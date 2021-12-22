import local from './local.config';
import staging from './staging.config';
import production from './production.config';

export default {
    local,
    staging,
    production,
    default: production
}
