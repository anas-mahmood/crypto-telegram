import 'dotenv/config';

const OWNER_ADDRESS = process.env.OWNER_ADDRESS || '';
const OWNER_KEY = process.env.OWNER_KEY || '';
const OPERATOR_ADDRESS = process.env.OPERATOR_ADDRESS || '';
const DETERMINISTIC_DEPLOYMENT_KEY =
    process.env.DETERMINISTIC_DEPLOYMENT_KEY || '';
const OWNER_KMS_KEY_PATH = process.env.OWNER_KMS_KEY_PATH || '';
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || '';
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY || '';
const BSCSCAN_KEY = process.env.BSCSCAN_KEY || '';
const OPBNB_BSCSCAN_KEY = process.env.OPBNB_BSCSCAN_KEY || '';
const CRONOS_SCAN_KEY = process.env.CRONOS_SCAN_KEY || '';
const FANTOM_SCAN_KEY = process.env.FANTOM_SCAN_KEY || '';
const MUMBAI_SCAN_KEY = process.env.MUMBAI_SCAN_KEY || '';
const GETBLOCK_BSCTESTNET_KEY = process.env.GETBLOCK_BSCTESTNET_KEY || '';
const ANKR_KEY = process.env.ANKR_KEY || '';

export {
    OWNER_ADDRESS,
    OWNER_KEY,
    OPERATOR_ADDRESS,
    DETERMINISTIC_DEPLOYMENT_KEY,
    OWNER_KMS_KEY_PATH,
    ALCHEMY_API_KEY,
    ETHERSCAN_KEY,
    BSCSCAN_KEY,
    OPBNB_BSCSCAN_KEY,
    CRONOS_SCAN_KEY,
    FANTOM_SCAN_KEY,
    MUMBAI_SCAN_KEY,
    GETBLOCK_BSCTESTNET_KEY,
    ANKR_KEY,
};