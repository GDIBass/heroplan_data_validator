require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2499:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const AllianceConfig_1 = __importDefault(__nccwpck_require__(4964));
const loadAllianceConfig = (filePath = './data/alliance.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Alliance Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    return new AllianceConfig_1.default(config);
});
exports["default"] = loadAllianceConfig;


/***/ }),

/***/ 2760:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const AscensionsConfig_1 = __importDefault(__nccwpck_require__(3625));
const loadAscensionsConfig = (filePath = './data/ascensions.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Ascensions Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    return new AscensionsConfig_1.default(config);
});
exports["default"] = loadAscensionsConfig;


/***/ }),

/***/ 4209:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const ClassesConfig_1 = __importDefault(__nccwpck_require__(6658));
const loadClassesConfig = (filePath = './data/classes.yml', imagePath = './img/emblems') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Classes Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new ClassesConfig_1.default(config);
});
exports["default"] = loadClassesConfig;


/***/ }),

/***/ 5950:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const ColorsConfig_1 = __importDefault(__nccwpck_require__(5835));
const loadColorsConfig = (filePath = './data/colors.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Classes Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Check image validation?
    return new ColorsConfig_1.default(config);
});
exports["default"] = loadColorsConfig;


/***/ }),

/***/ 4964:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const MemberStatus_1 = __importDefault(__nccwpck_require__(613));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['member_status'];
const requiredObjects = ['member_status'];
class AllianceConfig {
    constructor(rawYaml) {
        this._member_status = {};
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => requiredObjects;
        this.getClassName = () => AllianceConfig.name;
        (0, validation_1.validate)(this, rawYaml);
        const memberStatus = rawYaml.member_status;
        for (const statusKey in memberStatus) {
            this._member_status[statusKey] = new MemberStatus_1.default(statusKey, memberStatus[statusKey]);
        }
        (0, validation_1.validateNoDuplicateIds)(this, 'member_status', Object.values(this._member_status));
    }
    get member_status() {
        return this._member_status;
    }
}
exports["default"] = AllianceConfig;


/***/ }),

/***/ 3625:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const validateAllIntegers_1 = __importDefault(__nccwpck_require__(2288));
const Ascension_1 = __importDefault(__nccwpck_require__(5533));
const requiredKeys = ['max_ascension', 'ascensions'];
const requiredObjects = ['max_ascension', 'ascensions'];
class AscensionsConfig {
    constructor(rawYaml) {
        this._max_ascension = {};
        this._ascensions = {};
        this.getClassName = () => AscensionsConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => requiredObjects;
        (0, validation_1.validate)(this, rawYaml);
        const maxAscension = rawYaml.max_ascension;
        (0, validateAllIntegers_1.default)(this, 'max_ascension<keys>', Object.keys(maxAscension));
        (0, validateAllIntegers_1.default)(this, 'max_ascension<values>', Object.values(maxAscension));
        for (const maxKey in maxAscension) {
            this._max_ascension[parseInt(maxKey)] = parseInt(maxAscension[maxKey]);
        }
        const ascensions = rawYaml.ascensions;
        (0, validateAllIntegers_1.default)(this, 'ascensions<keys>', Object.keys(ascensions));
        for (const key in ascensions) {
            const intKey = parseInt(key);
            this._ascensions[intKey] = new Ascension_1.default(key, ascensions[key]);
        }
    }
    get max_ascension() {
        return this._max_ascension;
    }
    get ascensions() {
        return this._ascensions;
    }
}
exports["default"] = AscensionsConfig;


/***/ }),

/***/ 6658:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Class_1 = __importDefault(__nccwpck_require__(8154));
const requiredKeys = ['classes'];
const objectKeys = ['classes'];
class ClassesConfig {
    constructor(rawYaml) {
        this._classes = {};
        this.getClassName = () => ClassesConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        const classes = rawYaml.classes;
        for (const classKey in classes) {
            this._classes[classKey] = new Class_1.default(classKey, classes[classKey]);
        }
    }
    get classes() {
        return this._classes;
    }
}
exports["default"] = ClassesConfig;


/***/ }),

/***/ 5835:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Color_1 = __importDefault(__nccwpck_require__(2020));
const requiredKeys = ['colors', 'open_color'];
const objectKeys = ['colors', 'open_color'];
class ColorsConfig {
    constructor(rawYaml) {
        this._colors = {};
        this._open_color = {};
        this.getClassName = () => ColorsConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        const colors = rawYaml.colors;
        for (const colorKey in colors) {
            this._colors[colorKey] = new Color_1.default(colorKey, colors[colorKey]);
        }
        const openColors = rawYaml.open_color;
        for (const openColorKey in openColors) {
            this._open_color[openColorKey] = openColors[openColorKey];
        }
    }
    get colors() {
        return this._colors;
    }
    get open_color() {
        return this._open_color;
    }
}
exports["default"] = ColorsConfig;


/***/ }),

/***/ 7845:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Images_1 = __importDefault(__nccwpck_require__(6078));
const Bonus_1 = __importDefault(__nccwpck_require__(7478));
const requiredKeys = ['images', 'bonuses'];
const objectKeys = ['images', 'bonuses'];
class CostumesConfig {
    constructor(rawYaml) {
        this._bonuses = {};
        this.getClassName = () => CostumesConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._images = new Images_1.default(rawYaml.images);
        const bonuses = rawYaml.bonuses;
        for (const bonusKey in bonuses) {
            this._bonuses[bonusKey] = new Bonus_1.default(bonusKey, bonuses[bonusKey]);
        }
    }
    get images() {
        return this._images;
    }
    get bonuses() {
        return this._bonuses;
    }
}
exports["default"] = CostumesConfig;


/***/ }),

/***/ 9568:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Totals_1 = __importDefault(__nccwpck_require__(7818));
const Mode_1 = __importDefault(__nccwpck_require__(3968));
const Effect_1 = __importDefault(__nccwpck_require__(7645));
const Tree_1 = __importDefault(__nccwpck_require__(1363));
const Node_1 = __importDefault(__nccwpck_require__(5396));
const Reset_1 = __importDefault(__nccwpck_require__(3440));
const requiredKeys = ['totals', 'modes', 'effects', 'nodes', 'trees', 'reset'];
const objectKeys = ['totals', 'modes', 'effects', 'nodes', 'trees', 'reset'];
class EmblemsConfig {
    constructor(classesConfig, rawYaml) {
        this._modes = {};
        this._effects = {};
        this._nodes = {};
        this._trees = {};
        this.getClassName = () => EmblemsConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._totals = new Totals_1.default(rawYaml.totals);
        const modes = rawYaml.modes;
        for (const mode in modes) {
            this._modes[mode] = new Mode_1.default(mode, modes[mode]);
        }
        const effects = rawYaml.effects;
        for (const effect in effects) {
            this._effects[effect] = new Effect_1.default(effect, effects[effect], this._modes);
        }
        const nodes = rawYaml.nodes;
        for (const node in nodes) {
            this._nodes[node] = new Node_1.default(node, nodes[node], this._effects);
        }
        // Load trees w/ effects and classes for verification
        const trees = rawYaml.trees;
        for (const tree in trees) {
            this._trees[tree] = new Tree_1.default(tree, trees[tree], this._nodes, classesConfig);
        }
        // Load Reset
        this._reset = new Reset_1.default(rawYaml.reset);
    }
    get totals() {
        return this._totals;
    }
    get modes() {
        return this._modes;
    }
    get effects() {
        return this._effects;
    }
    get nodes() {
        return this._nodes;
    }
    get trees() {
        return this._trees;
    }
    get reset() {
        return this._reset;
    }
}
exports["default"] = EmblemsConfig;


/***/ }),

/***/ 8106:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Family_1 = __importDefault(__nccwpck_require__(8066));
const requiredKeys = ['families'];
const objectKeys = ['families'];
class FamiliesConfig {
    constructor(rawYaml) {
        this._families = {};
        this.getClassName = () => FamiliesConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        // Populate families object
        const families = rawYaml.families;
        for (const family in families) {
            this._families[family] = new Family_1.default(family, families[family]);
        }
        // verify no duplicate codes
        (0, validation_1.validateNoDuplicateIds)(this, 'families', Object.values(this._families));
    }
    get families() {
        return this._families;
    }
}
exports["default"] = FamiliesConfig;


/***/ }),

/***/ 7425:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Filter_1 = __importDefault(__nccwpck_require__(5055));
const requiredKeys = ['filters'];
const objectKeys = ['filters'];
class FiltersConfig {
    constructor(rawYaml) {
        this._filters = {};
        this.getClassName = () => FiltersConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        const filters = rawYaml.filters;
        for (const filter in filters) {
            this._filters[filter] = new Filter_1.default(filter, filters[filter]);
        }
    }
    get filters() {
        return this._filters;
    }
}
exports["default"] = FiltersConfig;


/***/ }),

/***/ 10:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Hero_1 = __importDefault(__nccwpck_require__(64));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
class HeroesConfig {
    constructor(classesConfig, familiesConfig, sourcesConfig, costumesConfig, colorsConfig, speedsConfig, heroImagesDirectory) {
        this._heroes = {};
        this.addHeroes = (color, stars, rawYaml) => __awaiter(this, void 0, void 0, function* () {
            for (const rawHero of rawYaml) {
                const hero = yield Hero_1.default.build(stars, color, rawHero, this.classesConfig, this.familiesConfig, this.sourcesConfig, this.costumesConfig, this.speedsConfig, this.heroImagesDirectory);
                if ((0, ohp_1.default)(this._heroes, hero.name)) {
                    throw new InvalidConfig_1.default(this, `Hero with name ${hero.name} already exists`);
                }
            }
        });
        this.getClassName = () => HeroesConfig.name;
        this.classesConfig = classesConfig;
        this.familiesConfig = familiesConfig;
        this.sourcesConfig = sourcesConfig;
        this.costumesConfig = costumesConfig;
        this.colorsConfig = colorsConfig;
        this.speedsConfig = speedsConfig;
        this.heroImagesDirectory = heroImagesDirectory;
    }
    get heroes() {
        return this._heroes;
    }
}
exports["default"] = HeroesConfig;


/***/ }),

/***/ 9405:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Ascension_1 = __importDefault(__nccwpck_require__(9951));
const requiredKeys = ['ascension'];
const objectKeys = ['ascension'];
class MaterialsConfig {
    constructor(rawYaml) {
        this._ascension = {};
        this.getClassName = () => MaterialsConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        const ascension = rawYaml.ascension;
        for (const ascensionKey in ascension) {
            this._ascension[ascensionKey] = new Ascension_1.default(ascensionKey, ascension[ascensionKey]);
        }
    }
    get ascension() {
        return this._ascension;
    }
}
exports["default"] = MaterialsConfig;


/***/ }),

/***/ 9830:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Source_1 = __importDefault(__nccwpck_require__(880));
const requiredKeys = ['sources'];
const objectKeys = ['sources'];
class SourcesConfig {
    constructor(rawYaml) {
        this._sources = {};
        this.getClassName = () => SourcesConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        const sources = rawYaml.sources;
        for (const source in sources) {
            this._sources[source] = new Source_1.default(source, sources[source]);
        }
        (0, validation_1.validateNoDuplicateIds)(this, 'sources', Object.values(this._sources));
    }
    get sources() {
        return this._sources;
    }
}
exports["default"] = SourcesConfig;


/***/ }),

/***/ 8113:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Speed_1 = __importDefault(__nccwpck_require__(9027));
const requiredKeys = ['speeds'];
const objectKeys = ['speeds'];
class SpeedsConfig {
    constructor(rawYaml) {
        this._speeds = {};
        this._validSpeeds = new Set();
        this.isValidSpeed = (speed) => this._validSpeeds.has(speed);
        this.getClassName = () => SpeedsConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        const speeds = rawYaml.speeds;
        for (const speed in speeds) {
            this._speeds[speed] = new Speed_1.default(speed, speeds[speed]);
            this._validSpeeds.add(this._speeds[speed].description);
        }
        (0, validation_1.validateNoDuplicateIds)(this, 'speeds', Object.values(this._speeds));
    }
    get speeds() {
        return this._speeds;
    }
    get validSpeeds() {
        return this._validSpeeds;
    }
}
exports["default"] = SpeedsConfig;


/***/ }),

/***/ 674:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const TypeSet_1 = __importDefault(__nccwpck_require__(3448));
const Category_1 = __importDefault(__nccwpck_require__(4875));
const Position_1 = __importDefault(__nccwpck_require__(1138));
const requiredKeys = ['typesets', 'categories', 'positions'];
const objectKeys = ['typesets', 'categories', 'positions'];
class TeamsConfig {
    constructor(rawYaml, classes, colors) {
        this._typesets = {};
        this._categories = {};
        this._positions = {};
        this.getClassName = () => TeamsConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        // typesets
        const typesets = rawYaml.typesets;
        for (const typeset in typesets) {
            this._typesets[typeset] = new TypeSet_1.default(typeset, typesets[typeset], classes);
        }
        // categories
        const categories = rawYaml.categories;
        for (const category in categories) {
            this._categories[category] = new Category_1.default(category, categories[category], this._typesets, colors);
        }
        (0, validation_1.validateNoDuplicateIds)(this, 'categories', Object.values(this._categories));
        // Positions
        const positions = rawYaml.positions;
        for (const position in positions) {
            this._positions[position] = new Position_1.default(position, positions[position]);
        }
        (0, validation_1.validateNoDuplicateIds)(this, 'positions', Object.values(this._positions));
    }
    get typesets() {
        return this._typesets;
    }
    get categories() {
        return this._categories;
    }
    get positions() {
        return this._positions;
    }
}
exports["default"] = TeamsConfig;


/***/ }),

/***/ 4005:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Troop_1 = __importDefault(__nccwpck_require__(6224));
const requiredKeys = ['troops', 'max_level_by_stars'];
const objectKeys = ['troops', 'max_level_by_stars'];
class TroopsConfig {
    constructor(rawYaml) {
        this._troops = {};
        this._maxLevelByStars = {};
        this.getClassName = () => TroopsConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        // troops
        const troops = rawYaml.troops;
        for (const troop in troops) {
            this._troops[troop] = new Troop_1.default(troop, troops[troop]);
        }
        // max_level_by_stars
        const maxLevelByStars = rawYaml.max_level_by_stars;
        for (const star in maxLevelByStars) {
            this._maxLevelByStars[parseInt(star)] = parseInt(maxLevelByStars[star]);
        }
        (0, validation_1.validateNoDuplicateIds)(this, 'troops', Object.values(this._troops));
    }
    get troops() {
        return this._troops;
    }
    get maxLevelByStars() {
        return this._maxLevelByStars;
    }
}
exports["default"] = TroopsConfig;


/***/ }),

/***/ 5271:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const SharingMode_1 = __importDefault(__nccwpck_require__(591));
const SocialNetwork_1 = __importDefault(__nccwpck_require__(1404));
const requiredKeys = ['sharing_modes', 'social_networks'];
const objectKeys = ['sharing_modes', 'social_networks'];
class UsersConfig {
    constructor(rawYaml) {
        this._sharingModes = {};
        this._socialNetworks = {};
        this.getClassName = () => UsersConfig.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        const sharingModes = rawYaml.sharing_modes;
        for (const sharingMode in sharingModes) {
            this._sharingModes[sharingMode] = new SharingMode_1.default(sharingMode, sharingModes[sharingMode]);
        }
        const socialNetworks = rawYaml.sharing_modes;
        for (const socialNetwork in socialNetworks) {
            this._socialNetworks[socialNetwork] = new SocialNetwork_1.default(socialNetwork, socialNetworks[socialNetwork]);
        }
        (0, validation_1.validateNoDuplicateIds)(this, 'sharingModes', Object.values(this._sharingModes));
    }
    get sharingModes() {
        return this._sharingModes;
    }
    get socialNetworks() {
        return this._socialNetworks;
    }
}
exports["default"] = UsersConfig;


/***/ }),

/***/ 613:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = [
    'key',
    'id',
    'description',
];
const requiredStrings = [
    'key',
    'description',
];
const requiredIntegers = [
    'id',
];
class MemberStatus {
    constructor(statusKey, rawYaml) {
        this.getRequiredKeys = () => requiredKeys;
        this.getClassName = () => MemberStatus.name;
        this.getStrings = () => requiredStrings;
        this.getIntegers = () => requiredIntegers;
        this.getId = () => this._id;
        (0, validation_1.validate)(this, rawYaml);
        // @ts-ignore
        (0, validation_1.validateKeysMatch)(this, statusKey, rawYaml._key);
        // @ts-ignore
        this._id = parseInt(rawYaml._id);
        // @ts-ignore
        this._key = rawYaml._key;
        // @ts-ignore
        this._description = rawYaml._description;
    }
    get id() {
        return this._id;
    }
    get key() {
        return this._key;
    }
    get description() {
        return this._description;
    }
}
exports["default"] = MemberStatus;


/***/ }),

/***/ 5533:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const validateAllIntegers_1 = __importDefault(__nccwpck_require__(2288));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const requiredKeys = [
    'key',
    'description',
];
const integerKeys = [
    'key',
];
const stringKeys = [
    'description',
];
const objectKeys = [
    'star_max',
    'limit_break',
];
class Ascension {
    constructor(statusKey, rawYaml) {
        this._star_max = {};
        this._limit_break = {};
        this.getClassName = () => Ascension.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getIntegers = () => integerKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, statusKey, rawYaml.key);
        this._key = parseInt(rawYaml.key);
        this._description = rawYaml.description;
        if ((0, ohp_1.default)(rawYaml, 'star_max')) {
            const starMax = rawYaml.star_max;
            (0, validateAllIntegers_1.default)(this, 'star_max<keys>', Object.keys(starMax));
            (0, validateAllIntegers_1.default)(this, 'star_max<values>', Object.values(starMax));
            for (let key in starMax) {
                this._star_max[parseInt(key)] = parseInt(starMax[key]);
            }
        }
        if ((0, ohp_1.default)(rawYaml, 'limit_break')) {
            const limitBreak = rawYaml.limit_break;
            (0, validateAllIntegers_1.default)(this, 'limit_break<keys>', Object.keys(limitBreak));
            (0, validateAllIntegers_1.default)(this, 'limit_break<values>', Object.values(limitBreak));
            for (const key in limitBreak) {
                this._limit_break[parseInt(key)] = parseInt(limitBreak[key]);
            }
        }
    }
    get key() {
        return this._key;
    }
    get description() {
        return this._description;
    }
    get star_max() {
        return this._star_max;
    }
    get limit_break() {
        return this._limit_break;
    }
}
exports["default"] = Ascension;


/***/ }),

/***/ 8154:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['code', 'key', 'description', 'image'];
const integerKeys = ['code'];
const stringKeys = ['key', 'description'];
const imageKeys = ['image'];
class Class {
    constructor(classKey, rawYaml) {
        this.getClassName = () => Class.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getIntegers = () => integerKeys;
        this.getStrings = () => stringKeys;
        this.getImages = () => imageKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, classKey, rawYaml.key);
        this._code = parseInt(rawYaml.code);
        this._key = rawYaml.key;
        this._description = rawYaml.description;
        this._image = rawYaml.image;
        (0, validation_1.validateImageType)(this, 'image', this._image, validation_1.ImageType.PNG);
        // TODO: Load image file and verify dimensions
    }
    get code() {
        return this._code;
    }
    get key() {
        return this._key;
    }
    get description() {
        return this._description;
    }
    get image() {
        return this._image;
    }
}
exports["default"] = Class;


/***/ }),

/***/ 2020:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const validateImageType_1 = __importStar(__nccwpck_require__(8475));
const requiredKeys = ['code', 'key', 'description', 'avatarImage', 'badgeImage'];
const integerKeys = ['code'];
const stringKeys = ['key', 'description'];
const imageKeys = ['avatarImage', 'badgeImage'];
class Color {
    constructor(colorKey, rawYaml) {
        this.getClassName = () => Color.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getIntegers = () => integerKeys;
        this.getStrings = () => stringKeys;
        this.getImages = () => imageKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, colorKey, rawYaml.key);
        this._code = parseInt(rawYaml.code);
        this._key = rawYaml.key;
        this._description = rawYaml.description;
        this._avatarImage = rawYaml.avatarImage;
        this._badgeImage = rawYaml.badgeImage;
        (0, validateImageType_1.default)(this, 'avatarImage', this._avatarImage, validateImageType_1.ImageTypes.PNG);
        (0, validateImageType_1.default)(this, 'badgeImage', this._badgeImage, validateImageType_1.ImageTypes.PNG);
    }
    get code() {
        return this._code;
    }
    get key() {
        return this._key;
    }
    get description() {
        return this._description;
    }
    get avatarImage() {
        return this._avatarImage;
    }
    get badgeImage() {
        return this._badgeImage;
    }
}
exports["default"] = Color;


/***/ }),

/***/ 7478:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const StatBonuses_1 = __importDefault(__nccwpck_require__(818));
const requiredKeys = ['key', 'max', '4', '3', '2'];
const stringKeys = ['key'];
const objectKeys = ['max', '4', '3', '2'];
class Bonus {
    constructor(bonusKey, rawYaml) {
        this.getClassName = () => Bonus.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, bonusKey, rawYaml.key);
        this._key = rawYaml.key;
        this._max = new StatBonuses_1.default(rawYaml.max);
        this._4 = new StatBonuses_1.default(rawYaml[4]);
        this._3 = new StatBonuses_1.default(rawYaml[3]);
        this._2 = new StatBonuses_1.default(rawYaml[2]);
    }
    get key() {
        return this._key;
    }
    get max() {
        return this._max;
    }
    get 4() {
        return this._4;
    }
    get 3() {
        return this._3;
    }
    get 2() {
        return this._2;
    }
}
exports["default"] = Bonus;


/***/ }),

/***/ 6078:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ["costume", "maxcostume"];
const imageKeys = ["costume", "maxcostume"];
class Images {
    constructor(rawYaml) {
        this.getClassName = () => Images.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getImages = () => imageKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._costume = rawYaml.costume;
        this._maxcostume = rawYaml.maxcostume;
        (0, validation_1.validateImageType)(this, "costume", this._costume, validation_1.ImageType.PNG);
        (0, validation_1.validateImageType)(this, "maxcostume", this._maxcostume, validation_1.ImageType.PNG);
    }
    get costume() {
        return this._costume;
    }
    get maxcostume() {
        return this._maxcostume;
    }
}
exports["default"] = Images;


/***/ }),

/***/ 818:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['attack', 'defense', 'health', 'mana'];
const integerKeys = ['attack', 'defense', 'health', 'mana'];
class StatBonuses {
    constructor(rawYaml) {
        this.getClassName = () => StatBonuses.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getIntegers = () => integerKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._attack = parseInt(rawYaml.attack);
        this._defense = parseInt(rawYaml.defense);
        this._health = parseInt(rawYaml.health);
        this._mana = parseInt(rawYaml.mana);
    }
    get attack() {
        return this._attack;
    }
    get defense() {
        return this._defense;
    }
    get health() {
        return this._health;
    }
    get mana() {
        return this._mana;
    }
}
exports["default"] = StatBonuses;


/***/ }),

/***/ 7645:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const requiredKeys = ['key', 'description', 'effect', 'mode', 'image'];
const stringKeys = ['key', 'description', 'effect', 'mode'];
const imageKeys = ['image'];
class Effect {
    constructor(effectKey, rawYaml, modes) {
        this.getClassName = () => Effect.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getImages = () => imageKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, effectKey, rawYaml.key);
        this._key = rawYaml.key;
        this._description = rawYaml.description;
        this._effect = rawYaml.effect;
        this._mode = rawYaml.mode;
        this._image = rawYaml.image;
        (0, validation_1.validateImageType)(this, 'image', this._image, validation_1.ImageType.PNG);
        if (!(0, ohp_1.default)(modes, this._mode)) {
            throw new InvalidConfig_1.default(this, `modes does not exist for key ${this._key} and mode ${this._mode}`);
        }
    }
    get key() {
        return this._key;
    }
    get description() {
        return this._description;
    }
    get effect() {
        return this._effect;
    }
    get mode() {
        return this._mode;
    }
    get image() {
        return this._image;
    }
}
exports["default"] = Effect;


/***/ }),

/***/ 3968:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['key', 'display'];
const stringKeys = ['key', 'display'];
class Mode {
    constructor(modeKey, rawYaml) {
        this.getClassName = () => Mode.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, modeKey, rawYaml.key);
        this._key = rawYaml.key;
        this._display = rawYaml.display;
    }
    get key() {
        return this._key;
    }
    get display() {
        return this._display;
    }
}
exports["default"] = Mode;


/***/ }),

/***/ 5396:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const requiredKeys = [
    'key',
    'type',
    'amount',
];
const stringKeys = [
    'key',
    'type',
];
const integerKeys = [
    'amount'
];
class Node {
    constructor(effectKey, rawYaml, effects) {
        this.getClassName = () => Node.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getIntegers = () => integerKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, effectKey, rawYaml.key);
        this._key = rawYaml.key;
        this._type = rawYaml.type;
        this._amount = parseInt(rawYaml.amount);
        if (!(0, ohp_1.default)(effects, this._type)) {
            throw new InvalidConfig_1.default(this, `types does not exist for key ${this._key} and effect ${this._type}`);
        }
    }
    get key() {
        return this._key;
    }
    get type() {
        return this._type;
    }
    get amount() {
        return this._amount;
    }
}
exports["default"] = Node;


/***/ }),

/***/ 3440:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['image'];
const imageKeys = ['image'];
class Reset {
    constructor(rawYaml) {
        this.getClassName = () => Reset.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getImages = () => imageKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._image = rawYaml.image;
        (0, validation_1.validateImageType)(this, 'image', this._image, validation_1.ImageType.PNG);
    }
    get image() {
        return this._image;
    }
}
exports["default"] = Reset;


/***/ }),

/***/ 1565:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const validateNode_1 = __importDefault(__nccwpck_require__(9507));
const requiredKeys = ['l', 'r'];
const stringKeys = ['l', 'r'];
class SplitNode {
    constructor(rawYaml, nodes) {
        this.getClassName = () => SplitNode.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._l = (0, validateNode_1.default)(this, 'l', rawYaml.l, nodes);
        this._r = (0, validateNode_1.default)(this, 'r', rawYaml.r, nodes);
    }
    get l() {
        return this._l;
    }
    get r() {
        return this._r;
    }
}
exports["default"] = SplitNode;


/***/ }),

/***/ 5466:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20'
];
const integerKeys = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20'
];
class Total {
    constructor(rawYaml) {
        this.getClassName = () => Total.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getIntegers = () => integerKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._1 = rawYaml['1'];
        this._2 = rawYaml['2'];
        this._3 = rawYaml['3'];
        this._4 = rawYaml['4'];
        this._5 = rawYaml['5'];
        this._6 = rawYaml['6'];
        this._7 = rawYaml['7'];
        this._8 = rawYaml['8'];
        this._9 = rawYaml['9'];
        this._10 = rawYaml['10'];
        this._11 = rawYaml['11'];
        this._12 = rawYaml['12'];
        this._13 = rawYaml['13'];
        this._14 = rawYaml['14'];
        this._15 = rawYaml['15'];
        this._16 = rawYaml['16'];
        this._17 = rawYaml['17'];
        this._18 = rawYaml['18'];
        this._19 = rawYaml['19'];
        this._20 = rawYaml['20'];
    }
    get 1() {
        return this._1;
    }
    get 2() {
        return this._2;
    }
    get 3() {
        return this._3;
    }
    get 4() {
        return this._4;
    }
    get 5() {
        return this._5;
    }
    get 6() {
        return this._6;
    }
    get 7() {
        return this._7;
    }
    get 8() {
        return this._8;
    }
    get 9() {
        return this._9;
    }
    get 10() {
        return this._10;
    }
    get 11() {
        return this._11;
    }
    get 12() {
        return this._12;
    }
    get 13() {
        return this._13;
    }
    get 14() {
        return this._14;
    }
    get 15() {
        return this._15;
    }
    get 16() {
        return this._16;
    }
    get 17() {
        return this._17;
    }
    get 18() {
        return this._18;
    }
    get 19() {
        return this._19;
    }
    get 20() {
        return this._20;
    }
}
exports["default"] = Total;


/***/ }),

/***/ 7818:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Total_1 = __importDefault(__nccwpck_require__(5466));
const requiredKeys = ['1', '2', '3', '4', '5'];
const objectKeys = ['1', '2', '3', '4', '5'];
class Totals {
    constructor(rawYaml) {
        this.getClassName = () => Totals.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._1 = new Total_1.default(rawYaml['1']);
        this._2 = new Total_1.default(rawYaml['2']);
        this._3 = new Total_1.default(rawYaml['3']);
        this._4 = new Total_1.default(rawYaml['4']);
        this._5 = new Total_1.default(rawYaml['5']);
    }
    get 1() {
        return this._1;
    }
    get 2() {
        return this._2;
    }
    get 3() {
        return this._3;
    }
    get 4() {
        return this._4;
    }
    get 5() {
        return this._5;
    }
}
exports["default"] = Totals;


/***/ }),

/***/ 1363:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const validateNode_1 = __importDefault(__nccwpck_require__(9507));
const SplitNode_1 = __importDefault(__nccwpck_require__(1565));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const requiredKeys = [
    'key',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
];
const stringKeys = [
    'key',
    '1',
    '4',
    '7',
    '10',
    '12',
    '15',
    '18',
    '20',
];
const objectKeys = [
    '2',
    '3',
    '5',
    '6',
    '8',
    '9',
    '11',
    '13',
    '14',
    '16',
    '17',
    '19',
];
class Tree {
    constructor(effectKey, rawYaml, nodes, classesConfig) {
        this.getClassName = () => Tree.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, effectKey, rawYaml.key);
        this['_key'] = rawYaml['key'];
        if (!(0, ohp_1.default)(classesConfig.classes, this['_key'])) {
            throw new InvalidConfig_1.default(this, `${this['_key']} is not a valid class, did you enter a valid class?`);
        }
        this._1 = (0, validateNode_1.default)(this, '1', rawYaml[1], nodes);
        this._2 = new SplitNode_1.default(rawYaml[2], nodes);
        this._3 = new SplitNode_1.default(rawYaml[3], nodes);
        this._4 = (0, validateNode_1.default)(this, '4', rawYaml[4], nodes);
        this._5 = new SplitNode_1.default(rawYaml[5], nodes);
        this._6 = new SplitNode_1.default(rawYaml[6], nodes);
        this._7 = (0, validateNode_1.default)(this, '7', rawYaml[7], nodes);
        this._8 = new SplitNode_1.default(rawYaml[8], nodes);
        this._9 = new SplitNode_1.default(rawYaml[9], nodes);
        this._10 = (0, validateNode_1.default)(this, '10', rawYaml[10], nodes);
        this._11 = new SplitNode_1.default(rawYaml[11], nodes);
        this._12 = (0, validateNode_1.default)(this, '12', rawYaml[12], nodes);
        this._13 = new SplitNode_1.default(rawYaml[13], nodes);
        this._14 = new SplitNode_1.default(rawYaml[14], nodes);
        this._15 = (0, validateNode_1.default)(this, '15', rawYaml[15], nodes);
        this._16 = new SplitNode_1.default(rawYaml[16], nodes);
        this._17 = new SplitNode_1.default(rawYaml[17], nodes);
        this._18 = (0, validateNode_1.default)(this, '18', rawYaml[18], nodes);
        this._19 = new SplitNode_1.default(rawYaml[19], nodes);
        this._20 = (0, validateNode_1.default)(this, '20', rawYaml[20], nodes);
    }
    get key() {
        return this._key;
    }
    get 1() {
        return this._1;
    }
    get 2() {
        return this._2;
    }
    get 3() {
        return this._3;
    }
    get 4() {
        return this._4;
    }
    get 5() {
        return this._5;
    }
    get 6() {
        return this._6;
    }
    get 7() {
        return this._7;
    }
    get 8() {
        return this._8;
    }
    get 9() {
        return this._9;
    }
    get 10() {
        return this._10;
    }
    get 11() {
        return this._11;
    }
    get 12() {
        return this._12;
    }
    get 13() {
        return this._13;
    }
    get 14() {
        return this._14;
    }
    get 15() {
        return this._15;
    }
    get 16() {
        return this._16;
    }
    get 17() {
        return this._17;
    }
    get 18() {
        return this._18;
    }
    get 19() {
        return this._19;
    }
    get 20() {
        return this._20;
    }
}
exports["default"] = Tree;


/***/ }),

/***/ 9507:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const validateNode = (config, key, node, nodes) => {
    if (!(0, ohp_1.default)(nodes, node)) {
        throw new InvalidConfig_1.default(config, `node does not exist for key ${key} and node ${node}`);
    }
    return node;
};
exports["default"] = validateNode;


/***/ }),

/***/ 8066:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = [
    'key',
    'code',
    'description',
    'image',
    'bonus',
];
const stringKeys = [
    'key',
    'description',
];
const integerKeys = [
    'code',
];
const imageKeys = ['image'];
const arrayKeys = ['bonus'];
class Family {
    constructor(familyKey, rawYaml) {
        this._bonus = [];
        this.getClassName = () => Family.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getArrays = () => arrayKeys;
        this.getIntegers = () => integerKeys;
        this.getImages = () => imageKeys;
        this.getStrings = () => stringKeys;
        this.getId = () => this._code;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, familyKey, rawYaml.key);
        this._key = rawYaml.key;
        this._code = parseInt(rawYaml.code);
        this._description = rawYaml.description;
        this._image = rawYaml.image;
        for (let bonusItem of rawYaml.bonus) {
            this._bonus.push(bonusItem);
        }
        (0, validation_1.validateImageType)(this, 'image', this._image, validation_1.ImageType.PNG);
    }
    get key() {
        return this._key;
    }
    get code() {
        return this._code;
    }
    get description() {
        return this._description;
    }
    get image() {
        return this._image;
    }
    get bonus() {
        return this._bonus;
    }
}
exports["default"] = Family;


/***/ }),

/***/ 5055:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const requiredKeys = ['description', 'type'];
const stringKeys = ['description', 'type'];
const objectKeys = ['ascensions'];
class Filter {
    constructor(filter, rawYaml) {
        this._ascensions = {};
        this.getClassName = () => Filter.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        this.getStrings = () => stringKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, filter, rawYaml.key);
        this._description = rawYaml.description;
        this._type = rawYaml.type;
        if ((0, ohp_1.default)(rawYaml, 'ascensions')) {
            // this.ascensions = {};
            const ascensions = rawYaml.ascensions;
            for (let ascension in ascensions) {
                this._ascensions[parseInt(ascension)] = parseInt(ascensions[ascension]);
            }
        }
    }
    get description() {
        return this._description;
    }
    get type() {
        return this._type;
    }
    get ascensions() {
        return this._ascensions;
    }
}
exports["default"] = Filter;


/***/ }),

/***/ 4335:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const validateHeroImage_1 = __importDefault(__nccwpck_require__(8803));
const requiredKeys = ['class', 'power', 'attack', 'defense', 'health', 'skill', 'effects', 'types', 'image'];
const stringKeys = ['class', 'skill', 'family', 'image', 'bonuses'];
const integerKeys = ['power', 'attack', 'defense', 'health'];
const arrayKeys = ['effets', 'types'];
class Costume {
    constructor(name, rawYaml, classesConfig, costumesConfig, costumeVariant) {
        this._effects = [];
        this._types = [];
        this.getClassName = () => Costume.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getIntegers = () => integerKeys;
        this.getStrings = () => stringKeys;
        this.getArrays = () => arrayKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._class = rawYaml.class;
        this._power = rawYaml.power;
        this._attack = rawYaml.attack;
        this._defense = rawYaml.defense;
        this._health = rawYaml.health;
        this._skill = rawYaml.skill;
        this._image = rawYaml.image;
        this._bonuses = rawYaml.bonuses;
        const effects = rawYaml.effects;
        for (let effect of effects) {
            this._effects.push(effect);
        }
        const types = rawYaml.types;
        for (let type of types) {
            this._types.push(type);
        }
        // validate class is valid
        if (!(0, ohp_1.default)(classesConfig.classes, this._class.toLowerCase())) {
            throw new InvalidConfig_1.default(this, `${name}'s costume (${costumeVariant}) has an invalid class ${this._class}`);
        }
        // validate bonuses are valid
        if (this._bonuses && !(0, ohp_1.default)(costumesConfig.bonuses, this._bonuses)) {
            throw new InvalidConfig_1.default(this, `${name}'s costume (${costumeVariant}) has an invalid bonus ${this._bonuses}`);
        }
        // TODO: Populate default variant if bonuses isn't set
    }
    get class() {
        return this._class;
    }
    get power() {
        return this._power;
    }
    get attack() {
        return this._attack;
    }
    get defense() {
        return this._defense;
    }
    get health() {
        return this._health;
    }
    get skill() {
        return this._skill;
    }
    get effects() {
        return this._effects;
    }
    get types() {
        return this._types;
    }
    get image() {
        return this._image;
    }
    get bonuses() {
        return this._bonuses;
    }
}
_a = Costume;
Costume.build = (stars, color, name, rawYaml, classesConfig, costumesConfig, costumeVariant, heroImagesDirectory) => __awaiter(void 0, void 0, void 0, function* () {
    const costume = new Costume(name, rawYaml, classesConfig, costumesConfig, costumeVariant);
    yield (0, validateHeroImage_1.default)(costume, name, costume._image, color, stars, heroImagesDirectory, costumeVariant);
    return costume;
});
exports["default"] = Costume;


/***/ }),

/***/ 64:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const Costume_1 = __importDefault(__nccwpck_require__(4335));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const validateHeroImage_1 = __importDefault(__nccwpck_require__(8803));
const requiredKeys = ['name', 'class', 'source', 'speed', 'power', 'attack', 'defense', 'health', 'skill', 'effects', 'types', 'image'];
const integerKeys = ['power', 'attack', 'defense', 'health'];
const stringKeys = ['name', 'class', 'source', 'speed', 'skill', 'family'];
const objectKeys = ['costume', 'costume2'];
const arrayKeys = ['effects', 'types', 'passives'];
class Hero {
    constructor(stars, color, rawYaml, costume, costume2, classesConfig, familiesConfig, sourcesConfig, speedsConfig) {
        this._family = null;
        this._effects = [];
        this._types = [];
        this._costume = null;
        this._costume2 = null;
        this.getClassName = () => Hero.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getIntegers = () => integerKeys;
        this.getObjects = () => objectKeys;
        this.getStrings = () => stringKeys;
        this.getArrays = () => arrayKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._stars = stars;
        this._color = color;
        this._name = rawYaml.name;
        this._source = rawYaml.source;
        this._class = rawYaml.class;
        this._speed = rawYaml.speed;
        this._power = rawYaml.power;
        this._attack = rawYaml.attack;
        this._defense = rawYaml.defense;
        this._health = rawYaml.health;
        this._skill = rawYaml.skill;
        this._image = rawYaml.image;
        this._effects = rawYaml.effects;
        this._types = rawYaml.types;
        this._passives = rawYaml.passives;
        this._costume = costume;
        this._costume2 = costume2;
        // Validate effects & types have values
        if (this._types.length === 0) {
            throw new InvalidConfig_1.default(this, `${this._name} has no types`);
        }
        if (this._effects.length === 0) {
            throw new InvalidConfig_1.default(this, `${this._name} has no effects`);
        }
        // Validate class is valid
        if (!(0, ohp_1.default)(classesConfig.classes, this._class.toLowerCase())) {
            throw new InvalidConfig_1.default(this, `${this._name} has an invalid class ${this._class}`);
        }
        // Validate speeds is valid
        if (!speedsConfig.isValidSpeed(this._speed)) {
            throw new InvalidConfig_1.default(this, `${this._name} has an invalid speed ${this._speed}`);
        }
        // Validate source is valid
        if (!(0, ohp_1.default)(sourcesConfig.sources, this._source.toLowerCase())) {
            throw new InvalidConfig_1.default(this, `${this._name} has an invalid source ${this._source}`);
        }
        // Validate family is valid (if set)
        if (this._family && !(0, ohp_1.default)(familiesConfig.families, this._family.toLowerCase())) {
            throw new InvalidConfig_1.default(this, `${this._name} has an invalid family ${this._family}`);
        }
    }
    get stars() {
        return this._stars;
    }
    get color() {
        return this._color;
    }
    get name() {
        return this._name;
    }
    get source() {
        return this._source;
    }
    get class() {
        return this._class;
    }
    get speed() {
        return this._speed;
    }
    get power() {
        return this._power;
    }
    get attack() {
        return this._attack;
    }
    get defense() {
        return this._defense;
    }
    get health() {
        return this._health;
    }
    get skill() {
        return this._skill;
    }
    get family() {
        return this._family;
    }
    get image() {
        return this._image;
    }
    get effects() {
        return this._effects;
    }
    get types() {
        return this._types;
    }
    get passives() {
        return this._passives;
    }
    get costume() {
        return this._costume;
    }
    get costume2() {
        return this._costume2;
    }
}
_a = Hero;
Hero.build = (stars, color, rawYaml, classesConfig, familiesConfig, sourcesConfig, costumesConfig, speedsConfig, heroImagesDirectory) => __awaiter(void 0, void 0, void 0, function* () {
    const name = rawYaml.name;
    const costumeRaw = rawYaml.costume || null;
    const costume = costumeRaw
        ? yield Costume_1.default.build(stars, color, name, costumeRaw, classesConfig, costumesConfig, 1, heroImagesDirectory)
        : null;
    const costume2Raw = rawYaml.costume2 || null;
    const costume2 = costume2Raw
        ? yield Costume_1.default.build(stars, color, name, costume2Raw, classesConfig, costumesConfig, 1, heroImagesDirectory)
        : null;
    const hero = new Hero(stars, color, rawYaml, costume, costume2, classesConfig, familiesConfig, sourcesConfig, speedsConfig);
    const image = hero._image;
    yield (0, validateHeroImage_1.default)(hero, name, image, color, stars, heroImagesDirectory, 0);
    return hero;
});
exports["default"] = Hero;


/***/ }),

/***/ 9951:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['key', 'image'];
const stringKeys = ['key'];
const imageKeys = ['image'];
class Ascension {
    constructor(ascensionKey, rawYaml) {
        this.getClassName = () => Ascension.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getImages = () => imageKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, ascensionKey, rawYaml.key);
        this._key = rawYaml.key;
        this._image = rawYaml.image;
        (0, validation_1.validateImageType)(this, 'image', this._image, validation_1.ImageType.PNG);
    }
    get key() {
        return this._key;
    }
    get image() {
        return this._image;
    }
}
exports["default"] = Ascension;


/***/ }),

/***/ 880:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['key', 'code', 'description'];
const stringKeys = ['key', 'description'];
const integerKey = ['code'];
class Source {
    constructor(sourceKey, rawYaml) {
        this.getClassName = () => Source.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getIntegers = () => integerKey;
        this.getId = () => this._code;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, sourceKey, rawYaml.key);
        this._key = rawYaml.key;
        this._code = parseInt(rawYaml.code);
        this._description = rawYaml.description;
    }
    get key() {
        return this._key;
    }
    get code() {
        return this._code;
    }
    get description() {
        return this._description;
    }
}
exports["default"] = Source;


/***/ }),

/***/ 9027:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = [
    'key',
    'code',
    'shortName',
    'description',
    'tiles',
    'breakPoints',
];
const stringKeys = ['key', 'shortName', 'description', 'breakPoints'];
const intKeys = ['code'];
const arrayKeys = ['tiles'];
const objectKeys = ['breakPoints'];
class Speed {
    constructor(speedKey, rawYaml) {
        this._tiles = [];
        this._breakPoints = {};
        this.getClassName = () => Speed.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        this.getIntegers = () => intKeys;
        this.getStrings = () => stringKeys;
        this.getArrays = () => arrayKeys;
        this.getId = () => this._code;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, speedKey, rawYaml.key);
        this._key = rawYaml.key;
        this._code = parseInt(rawYaml.code);
        this._shortName = rawYaml.shortName;
        this._description = rawYaml.description;
        for (let tile of rawYaml.tiles) {
            this._tiles.push(parseFloat(tile));
        }
        const breakpoints = rawYaml.breakPoints;
        for (let breakpointRaw in breakpoints) {
            const breakpoint = parseInt(breakpointRaw);
            this._breakPoints[breakpoint] = [];
            for (let breakpointItem of breakpoints[breakpoint]) {
                this._breakPoints[breakpoint].push(parseFloat(breakpointItem));
            }
        }
    }
    get key() {
        return this._key;
    }
    get code() {
        return this._code;
    }
    get shortName() {
        return this._shortName;
    }
    get description() {
        return this._description;
    }
    get tiles() {
        return this._tiles;
    }
    get breakPoints() {
        return this._breakPoints;
    }
}
exports["default"] = Speed;


/***/ }),

/***/ 4875:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const requiredKeys = ['category', 'description', 'typeset'];
const stringKeys = ['description', 'typeset'];
const booleanKeys = ['distinct'];
const integerKeys = ['category'];
const arrayKeys = ['stars', 'colors'];
class Category {
    constructor(categoryKey, rawYaml, typesets, colorsConfig) {
        this._distinct = false;
        this._colors = new Set();
        this._stars = new Set();
        this.getClassName = () => Category.name;
        this.getId = () => this._category;
        this.getIntegers = () => integerKeys;
        this.getBooleans = () => booleanKeys;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getArrays = () => arrayKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._description = rawYaml.description;
        this._category = parseInt(rawYaml.category);
        const typeset = rawYaml.typeset;
        if (!(0, ohp_1.default)(typesets, typeset)) {
            throw new InvalidConfig_1.default(this, `invalid typeset set for ${categoryKey}, category: ${typeset}`);
        }
        this._typeset = typeset;
        const colors = rawYaml.colors || [];
        for (let color of colors) {
            if (!(0, ohp_1.default)(colorsConfig.colors, color)) {
                throw new InvalidConfig_1.default(this, `Color for team category ${this._category} is invalid: ${color}`);
            }
            this._colors.add(color);
        }
        const stars = rawYaml.stars || [];
        for (let star of stars) {
            let starVal = parseInt(star);
            if (isNaN(starVal) || starVal < 1 || starVal > 5) {
                throw new InvalidConfig_1.default(this, `Invalid stars for team category ${this._category} is invalid: ${star}`);
            }
            this._stars.add(starVal);
        }
    }
    get description() {
        return this._description;
    }
    get category() {
        return this._category;
    }
    get distinct() {
        return this._distinct;
    }
    get typeset() {
        return this._typeset;
    }
    get colors() {
        return this._colors;
    }
    get stars() {
        return this._stars;
    }
}
exports["default"] = Category;


/***/ }),

/***/ 1138:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['key', 'id', 'description'];
const stringKeys = ['key', 'description'];
const integerKeys = ['id'];
class Position {
    constructor(positionKey, rawYaml) {
        this.getClassName = () => Position.name;
        this.getId = () => this._id;
        this.getIntegers = () => integerKeys;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, positionKey, rawYaml.key);
        this._key = rawYaml.key;
        this._id = parseInt(rawYaml.id);
        this._description = rawYaml.description;
    }
    get key() {
        return this._key;
    }
    get id() {
        return this._id;
    }
    get description() {
        return this._description;
    }
}
exports["default"] = Position;


/***/ }),

/***/ 421:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const requiredKeys = ['key', 'type', 'description'];
const stringKeys = ['key', 'description'];
const integerKeys = ['type'];
const arrayKeys = ['classes'];
class Type {
    constructor(typeKey, rawYaml, classesConfig) {
        this._classes = new Set();
        this.getClassName = () => Type.name;
        this.getId = () => this._type;
        this.getIntegers = () => integerKeys;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getArrays = () => arrayKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, typeKey, rawYaml.key);
        this._key = rawYaml.key;
        this._type = parseInt(rawYaml.type);
        this._description = rawYaml.description;
        const classes = rawYaml.classes || [];
        for (let className of classes) {
            if (!(0, ohp_1.default)(classesConfig.classes, className)) {
                throw new InvalidConfig_1.default(this, `Class for team type ${this._description} is invalid: ${className}`);
            }
            this._classes.add(className);
        }
    }
    get key() {
        return this._key;
    }
    get type() {
        return this._type;
    }
    get description() {
        return this._description;
    }
    get classes() {
        return this._classes;
    }
}
exports["default"] = Type;


/***/ }),

/***/ 3448:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Type_1 = __importDefault(__nccwpck_require__(421));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['key', 'types'];
const objectKeys = ['types'];
class TypeSet {
    // Validate no duplicate types.type
    constructor(typesetKey, rawYaml, classesConfig) {
        this._types = {};
        this.getClassName = () => TypeSet.name;
        this.getObjects = () => objectKeys;
        this.getRequiredKeys = () => requiredKeys;
        (0, validation_1.validate)(this, rawYaml);
        const key = rawYaml.key;
        (0, validation_1.validateKeysMatch)(this, typesetKey, key);
        this._key = rawYaml.key;
        const types = rawYaml.types;
        for (let type in types) {
            this._types[type] = new Type_1.default(type, types[type], classesConfig);
        }
        (0, validation_1.validateNoDuplicateIds)(this, 'types', Object.values(this._types));
    }
    get key() {
        return this._key;
    }
    get types() {
        return this._types;
    }
}
exports["default"] = TypeSet;


/***/ }),

/***/ 9794:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['purple', 'yellow', 'blue', 'green', 'red'];
const imageKeys = ['purple', 'yellow', 'blue', 'green', 'red'];
class ImageSet {
    constructor(rawYaml) {
        this.getClassName = () => ImageSet.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getImages = () => imageKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._purple = rawYaml.purple;
        this._yellow = rawYaml.yellow;
        this._blue = rawYaml.blue;
        this._green = rawYaml.green;
        this._red = rawYaml.red;
        (0, validation_1.validateImageType)(this, 'purple', this._purple, validation_1.ImageType.JPG);
        (0, validation_1.validateImageType)(this, 'yellow', this._yellow, validation_1.ImageType.JPG);
        (0, validation_1.validateImageType)(this, 'blue', this._blue, validation_1.ImageType.JPG);
        (0, validation_1.validateImageType)(this, 'green', this._green, validation_1.ImageType.JPG);
        (0, validation_1.validateImageType)(this, 'red', this._red, validation_1.ImageType.JPG);
    }
    get purple() {
        return this._purple;
    }
    get yellow() {
        return this._yellow;
    }
    get blue() {
        return this._blue;
    }
    get green() {
        return this._green;
    }
    get red() {
        return this._red;
    }
}
exports["default"] = ImageSet;


/***/ }),

/***/ 6116:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const ImageSet_1 = __importDefault(__nccwpck_require__(9794));
const requiredKeys = ['full', 'half'];
const objectKeys = ['full', 'half'];
class Images {
    constructor(rawYaml) {
        this.getClassName = () => Images.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getObjects = () => objectKeys;
        (0, validation_1.validate)(this, rawYaml);
        this._full = new ImageSet_1.default(rawYaml.full);
        this._half = new ImageSet_1.default(rawYaml.half);
    }
    get full() {
        return this._full;
    }
    get half() {
        return this._half;
    }
}
exports["default"] = Images;


/***/ }),

/***/ 6224:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Images_1 = __importDefault(__nccwpck_require__(6116));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['key', 'id', 'stars', 'name', 'description', 'images'];
const stringKeys = ['key', 'name', 'description'];
const objectKeys = ['images', 'manaBonus'];
const integerKeys = ['id', 'stars'];
class Troop {
    constructor(troopKey, rawYaml) {
        this._manaBonus = {};
        this.getClassName = () => Troop.name;
        this.getIntegers = () => integerKeys;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getObjects = () => objectKeys;
        this.getId = () => this._id;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, troopKey, rawYaml.key);
        this._key = rawYaml.key;
        this._id = parseInt(rawYaml.id);
        this._stars = parseInt(rawYaml.stars);
        this._name = rawYaml.name;
        this._description = rawYaml.description;
        this._images = new Images_1.default(rawYaml.images);
        const manaBonus = rawYaml.mana_bonus || {};
        for (let breakpoint in manaBonus) {
            this._manaBonus[parseInt(breakpoint)] = parseInt(manaBonus[breakpoint]);
        }
    }
    get key() {
        return this._key;
    }
    get id() {
        return this._id;
    }
    get stars() {
        return this._stars;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get images() {
        return this._images;
    }
    get manaBonus() {
        return this._manaBonus;
    }
}
exports["default"] = Troop;


/***/ }),

/***/ 591:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['key', 'id', 'description'];
const stringKeys = ['key', 'description'];
const integerKeys = ['id'];
class SharingMode {
    constructor(sharingModeKey, rawYaml) {
        this.getClassName = () => SharingMode.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        this.getIntegers = () => integerKeys;
        this.getId = () => this._id;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, sharingModeKey, rawYaml.key);
        this._key = rawYaml.key;
        this._id = parseInt(rawYaml.id);
        this._description = rawYaml.description;
    }
    get key() {
        return this._key;
    }
    get id() {
        return this._id;
    }
    get description() {
        return this._description;
    }
}
exports["default"] = SharingMode;


/***/ }),

/***/ 1404:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const validation_1 = __nccwpck_require__(7110);
const requiredKeys = ['key', 'description'];
const stringKeys = ['key', 'description'];
class SocialNetwork {
    constructor(socialNetworkKey, rawYaml) {
        this.getClassName = () => SocialNetwork.name;
        this.getRequiredKeys = () => requiredKeys;
        this.getStrings = () => stringKeys;
        (0, validation_1.validate)(this, rawYaml);
        (0, validation_1.validateKeysMatch)(this, socialNetworkKey, rawYaml.key);
        this._key = rawYaml.key;
        this._description = rawYaml.description;
    }
    get key() {
        return this._key;
    }
    get description() {
        return this._description;
    }
}
exports["default"] = SocialNetwork;


/***/ }),

/***/ 6446:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const CostumesConfig_1 = __importDefault(__nccwpck_require__(7845));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const loadCostumesConfig = (filePath = './data/costumes.yml', imagePath = './img/') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Costumes Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new CostumesConfig_1.default(config);
});
exports["default"] = loadCostumesConfig;


/***/ }),

/***/ 1278:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const EmblemsConfig_1 = __importDefault(__nccwpck_require__(9568));
const loadEmblemsConfig = (classesConfig, filePath = './data/emblems.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Emblems Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new EmblemsConfig_1.default(classesConfig, config);
});
exports["default"] = loadEmblemsConfig;


/***/ }),

/***/ 3042:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class FileLoadFailed extends Error {
    constructor(filename, data) {
        super(`File failed to load: ${filename}`);
        this._filename = filename;
        this._data = data;
    }
    get filename() {
        return this._filename;
    }
    get data() {
        return this._data;
    }
}
exports["default"] = FileLoadFailed;


/***/ }),

/***/ 5833:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class ImageMissing extends Error {
    constructor(heroName, fileName) {
        super(`Hero is missing image | hero=${heroName} | fileName=${fileName}`);
        this._heroName = heroName;
        this._fileName = fileName;
    }
    get heroName() {
        return this._heroName;
    }
    get fileName() {
        return this._fileName;
    }
}
exports["default"] = ImageMissing;


/***/ }),

/***/ 7119:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class InvalidConfig extends Error {
    constructor(config, data) {
        super(`Config is not valid: ${config.getClassName()}:${data}`);
        this._configName = config.getClassName();
        this._data = data;
    }
    get configName() {
        return this._configName;
    }
    get data() {
        return this._data;
    }
}
exports["default"] = InvalidConfig;


/***/ }),

/***/ 4382:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class InvalidImage extends Error {
    constructor(heroName, additionalDetails) {
        super(`Hero image is invalid | hero=${heroName} | ${additionalDetails}`);
        this._heroName = heroName;
        this._additionalDetails = additionalDetails;
    }
    get heroName() {
        return this._heroName;
    }
    get additionalDetails() {
        return this._additionalDetails;
    }
}
exports["default"] = InvalidImage;


/***/ }),

/***/ 2230:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class MissingRequiredKey extends Error {
    constructor(config, data, source) {
        super(`Config is missing key | ${config.getClassName()}:${data} | keysPassed=${Object.keys(source)}`);
        this._configName = config.getClassName();
        this._data = data;
        this._source = source;
    }
    get configName() {
        return this._configName;
    }
    get data() {
        return this._data;
    }
    get source() {
        return this._source;
    }
}
exports["default"] = MissingRequiredKey;


/***/ }),

/***/ 637:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class YamlParseFailed extends Error {
    constructor(filename, data) {
        super(`Yaml Parse failed on file: ${data}`);
        this._filename = filename;
        this._data = data;
    }
    get filename() {
        return this._filename;
    }
    get data() {
        return this._data;
    }
}
exports["default"] = YamlParseFailed;


/***/ }),

/***/ 8033:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const FamiliesConfig_1 = __importDefault(__nccwpck_require__(8106));
const loadFamiliesConfig = (filePath = './data/families.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Families Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new FamiliesConfig_1.default(config);
});
exports["default"] = loadFamiliesConfig;


/***/ }),

/***/ 5939:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const FiltersConfig_1 = __importDefault(__nccwpck_require__(7425));
const loadFiltersConfig = (filePath = './data/filters.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Filters Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new FiltersConfig_1.default(config);
});
exports["default"] = loadFiltersConfig;


/***/ }),

/***/ 7958:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const HeroesConfig_1 = __importDefault(__nccwpck_require__(10));
const yaml_1 = __nccwpck_require__(9912);
const loadHeroConfigs = (classesConfig, familiesConfig, sourcesConfig, costumesConfig, colorsConfig, speedsConfig, heroesDirectory = './data/heroes/', heroImagesDirectory = './img/heroes/') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Heroes Config');
    const heroesConfig = new HeroesConfig_1.default(classesConfig, familiesConfig, sourcesConfig, costumesConfig, colorsConfig, speedsConfig, heroImagesDirectory);
    for (let color in colorsConfig.colors) {
        for (let star of [1, 2, 3, 4, 5]) {
            core.info(`Loading ${star} star ${color} Heroes`);
            const file = `${heroesDirectory}${color}/${star}star.yml`;
            heroesConfig.addHeroes(color, star, yield (0, yaml_1.loadYamlFileArray)(file));
        }
    }
    return heroesConfig;
});
exports["default"] = loadHeroConfigs;


/***/ }),

/***/ 3109:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const alliance_1 = __importDefault(__nccwpck_require__(2499));
const FileLoadFailed_1 = __importDefault(__nccwpck_require__(3042));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const YamlParseFailed_1 = __importDefault(__nccwpck_require__(637));
const MissingRequiredKey_1 = __importDefault(__nccwpck_require__(2230));
const ascensions_1 = __importDefault(__nccwpck_require__(2760));
const classes_1 = __importDefault(__nccwpck_require__(4209));
const costumes_1 = __importDefault(__nccwpck_require__(6446));
const emblems_1 = __importDefault(__nccwpck_require__(1278));
const families_1 = __importDefault(__nccwpck_require__(8033));
const filters_1 = __importDefault(__nccwpck_require__(5939));
const materials_1 = __importDefault(__nccwpck_require__(5431));
const sources_1 = __importDefault(__nccwpck_require__(122));
const speeds_1 = __importDefault(__nccwpck_require__(561));
const teams_1 = __importDefault(__nccwpck_require__(267));
const troops_1 = __importDefault(__nccwpck_require__(5539));
const users_1 = __importDefault(__nccwpck_require__(7242));
const heroes_1 = __importDefault(__nccwpck_require__(7958));
const colors_1 = __importDefault(__nccwpck_require__(5950));
const ImageMissing_1 = __importDefault(__nccwpck_require__(5833));
const InvalidImage_1 = __importDefault(__nccwpck_require__(4382));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        core.info('Running config validation');
        try {
            const [allianceConfig, ascensionsConfig, classesConfig, colorsConfig, costumesConfig, familiesConfig, filtersConfig, materialsConfig, sourcesConfig, speedsConfig,] = yield Promise.all([
                (0, alliance_1.default)(),
                (0, ascensions_1.default)(),
                (0, classes_1.default)(),
                (0, colors_1.default)(),
                (0, costumes_1.default)(),
                (0, families_1.default)(),
                (0, filters_1.default)(),
                (0, materials_1.default)(),
                (0, sources_1.default)(),
                (0, speeds_1.default)(),
            ]);
            const [troopsConfig, usersConfig, emblemsConfig, teamsConfig, heroesConfig,] = yield Promise.all([
                (0, troops_1.default)(),
                (0, users_1.default)(),
                (0, emblems_1.default)(classesConfig),
                (0, teams_1.default)(classesConfig, colorsConfig),
                (0, heroes_1.default)(classesConfig, familiesConfig, sourcesConfig, costumesConfig, colorsConfig, speedsConfig),
            ]);
        }
        catch (error) {
            if (error instanceof FileLoadFailed_1.default) {
                core.setFailed(error.message);
            }
            else if (error instanceof InvalidConfig_1.default) {
                core.setFailed(error.message);
            }
            else if (error instanceof YamlParseFailed_1.default) {
                core.setFailed(error.message);
            }
            else if (error instanceof MissingRequiredKey_1.default) {
                core.setFailed(error.message);
            }
            else if (error instanceof ImageMissing_1.default) {
                core.setFailed(error.message);
            }
            else if (error instanceof InvalidImage_1.default) {
                core.setFailed(error.message);
            }
            else {
                console.log(error);
                core.setFailed("Encountered an unknown error");
            }
        }
        // TODO: Ensure classes are lower
        // TODO: Ensure families are lower
        // TODO: Ensure sources are lower
        // TODO: Ensure speeds are lower
    });
}
run();


/***/ }),

/***/ 5431:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const MaterialsConfig_1 = __importDefault(__nccwpck_require__(9405));
const loadMaterialsConfig = (filePath = './data/materials.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Materials Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new MaterialsConfig_1.default(config);
});
exports["default"] = loadMaterialsConfig;


/***/ }),

/***/ 122:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const SourcesConfig_1 = __importDefault(__nccwpck_require__(9830));
const loadSourcesConfig = (filePath = './data/sources.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Sources Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new SourcesConfig_1.default(config);
});
exports["default"] = loadSourcesConfig;


/***/ }),

/***/ 561:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const SpeedsConfig_1 = __importDefault(__nccwpck_require__(8113));
const loadSpeedsConfig = (filePath = './data/speeds.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Speeds Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new SpeedsConfig_1.default(config);
});
exports["default"] = loadSpeedsConfig;


/***/ }),

/***/ 267:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const TeamsConfig_1 = __importDefault(__nccwpck_require__(674));
const loadTeamsConfig = (classes, colors, filePath = './data/teams.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Teams Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new TeamsConfig_1.default(config, classes, colors);
});
exports["default"] = loadTeamsConfig;


/***/ }),

/***/ 5539:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const TroopsConfig_1 = __importDefault(__nccwpck_require__(4005));
const loadTroopsConfig = (filePath = './data/troops.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Troops Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new TroopsConfig_1.default(config);
});
exports["default"] = loadTroopsConfig;


/***/ }),

/***/ 7242:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__nccwpck_require__(2186));
const yaml_1 = __nccwpck_require__(9912);
const UsersConfig_1 = __importDefault(__nccwpck_require__(5271));
const loadUsersConfig = (filePath = './data/users.yml') => __awaiter(void 0, void 0, void 0, function* () {
    core.info('Loading Users Config');
    const config = yield (0, yaml_1.loadYamlFile)(filePath);
    // TODO: Validate image was uploaded and is correct dimensions
    return new UsersConfig_1.default(config);
});
exports["default"] = loadUsersConfig;


/***/ }),

/***/ 1439:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const ohp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
exports["default"] = ohp;


/***/ }),

/***/ 7110:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageType = exports.validateImageType = exports.validateNoDuplicateIds = exports.validateKeysMatch = exports.validate = exports.hasId = void 0;
var HasId_1 = __nccwpck_require__(1177);
Object.defineProperty(exports, "hasId", ({ enumerable: true, get: function () { return HasId_1.hasId; } }));
var validate_1 = __nccwpck_require__(9760);
Object.defineProperty(exports, "validate", ({ enumerable: true, get: function () { return __importDefault(validate_1).default; } }));
var validateKeysMatch_1 = __nccwpck_require__(8471);
Object.defineProperty(exports, "validateKeysMatch", ({ enumerable: true, get: function () { return __importDefault(validateKeysMatch_1).default; } }));
var validateNoDuplicateIds_1 = __nccwpck_require__(5861);
Object.defineProperty(exports, "validateNoDuplicateIds", ({ enumerable: true, get: function () { return __importDefault(validateNoDuplicateIds_1).default; } }));
var validateImageType_1 = __nccwpck_require__(8475);
Object.defineProperty(exports, "validateImageType", ({ enumerable: true, get: function () { return __importDefault(validateImageType_1).default; } }));
Object.defineProperty(exports, "ImageType", ({ enumerable: true, get: function () { return validateImageType_1.ImageTypes; } }));


/***/ }),

/***/ 647:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasBooleans = void 0;
const hasBooleans = (arg) => typeof (arg === null || arg === void 0 ? void 0 : arg.getBooleans) === 'function';
exports.hasBooleans = hasBooleans;


/***/ }),

/***/ 6642:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasFloats = void 0;
const hasFloats = (arg) => typeof (arg === null || arg === void 0 ? void 0 : arg.getFloats) === 'function';
exports.hasFloats = hasFloats;


/***/ }),

/***/ 1177:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasId = void 0;
const hasId = (arg) => typeof (arg === null || arg === void 0 ? void 0 : arg.getId) === 'function';
exports.hasId = hasId;


/***/ }),

/***/ 7909:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasImages = void 0;
const hasImages = (arg) => typeof (arg === null || arg === void 0 ? void 0 : arg.getImages) === 'function';
exports.hasImages = hasImages;


/***/ }),

/***/ 5154:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasIntegers = void 0;
const hasIntegers = (arg) => typeof (arg === null || arg === void 0 ? void 0 : arg.getIntegers) === 'function';
exports.hasIntegers = hasIntegers;


/***/ }),

/***/ 5344:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasObjects = void 0;
const hasObjects = (arg) => typeof (arg === null || arg === void 0 ? void 0 : arg.getObjects) === 'function';
exports.hasObjects = hasObjects;


/***/ }),

/***/ 249:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasRequiredKeys = void 0;
const hasRequiredKeys = (arg) => typeof (arg === null || arg === void 0 ? void 0 : arg.getRequiredKeys) === 'function';
exports.hasRequiredKeys = hasRequiredKeys;


/***/ }),

/***/ 4674:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hasStrings = void 0;
const hasStrings = (arg) => typeof (arg === null || arg === void 0 ? void 0 : arg.getStrings) === 'function';
exports.hasStrings = hasStrings;


/***/ }),

/***/ 9760:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const HasRequiredKeys_1 = __nccwpck_require__(249);
const verifyRequiredKeys_1 = __importDefault(__nccwpck_require__(1963));
const HasObjects_1 = __nccwpck_require__(5344);
const verifyKeysAreObjects_1 = __importDefault(__nccwpck_require__(145));
const HasStrings_1 = __nccwpck_require__(4674);
const verifyKeysAreStrings_1 = __importDefault(__nccwpck_require__(1780));
const HasIntegers_1 = __nccwpck_require__(5154);
const verifyKeysAreIntegers_1 = __importDefault(__nccwpck_require__(9323));
const HasImages_1 = __nccwpck_require__(7909);
const verifyKeysAreImages_1 = __importDefault(__nccwpck_require__(9165));
const HasFloats_1 = __nccwpck_require__(6642);
const verifyKeysAreFloats_1 = __importDefault(__nccwpck_require__(4806));
const HasBooleans_1 = __nccwpck_require__(647);
const verifyKeysAreBooleans_1 = __importDefault(__nccwpck_require__(3691));
const validate = (config, rawObject) => {
    if ((0, HasRequiredKeys_1.hasRequiredKeys)(config)) {
        (0, verifyRequiredKeys_1.default)(config, rawObject);
    }
    if ((0, HasObjects_1.hasObjects)(config)) {
        (0, verifyKeysAreObjects_1.default)(config, rawObject);
    }
    if ((0, HasStrings_1.hasStrings)(config)) {
        (0, verifyKeysAreStrings_1.default)(config, rawObject);
    }
    if ((0, HasIntegers_1.hasIntegers)(config)) {
        (0, verifyKeysAreIntegers_1.default)(config, rawObject);
    }
    if ((0, HasImages_1.hasImages)(config)) {
        (0, verifyKeysAreImages_1.default)(config, rawObject);
    }
    if ((0, HasFloats_1.hasFloats)(config)) {
        (0, verifyKeysAreFloats_1.default)(config, rawObject);
    }
    if ((0, HasBooleans_1.hasBooleans)(config)) {
        (0, verifyKeysAreBooleans_1.default)(config, rawObject);
    }
};
exports["default"] = validate;


/***/ }),

/***/ 2288:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const validateAllIntegers = (config, key, elements) => {
    for (const element of elements) {
        if (isNaN(parseInt(element))) {
            throw new InvalidConfig_1.default(config, `One of value in ${key} is not an integer: ${element}`);
        }
    }
};
exports["default"] = validateAllIntegers;


/***/ }),

/***/ 8803:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __nccwpck_require__(7110);
const validateImageType_1 = __nccwpck_require__(8475);
const ImageMissing_1 = __importDefault(__nccwpck_require__(5833));
const fs_1 = __importDefault(__nccwpck_require__(7147));
const util_1 = __importDefault(__nccwpck_require__(3837));
const canvas_1 = __nccwpck_require__(771);
const InvalidImage_1 = __importDefault(__nccwpck_require__(4382));
const imageFromBuffer = (base64Contents) => __awaiter(void 0, void 0, void 0, function* () {
    const image = new canvas_1.Image();
    return new Promise((resolve, reject) => {
        image.onload = () => resolve(image);
        image.onerror = () => reject(image);
        image.src = base64Contents;
    });
});
const validImageSizes = new Set([200, 201]);
const validateHeroImage = (config, heroName, imageLink, color, stars, heroImagesDirectory, costumeVariant = 0) => __awaiter(void 0, void 0, void 0, function* () {
    // Checks imgur image type
    (0, validateImageType_1.checkImageType)(config, `${heroName} w/ costume variant ${costumeVariant} does not have image type ${index_1.ImageType.JPG}`, imageLink, index_1.ImageType.JPG);
    // Check local image is present
    let costumeAppend = '';
    if (costumeVariant === 1) {
        costumeAppend = 'costume';
    }
    else if (costumeVariant === 2) {
        costumeAppend = 'costume2';
    }
    const alphaName = (heroName.match(/[a-zA-Z]+/g) || []).join('').toLowerCase();
    const imageFile = `${heroImagesDirectory}${alphaName}${costumeAppend}.jpg`;
    const readFile = util_1.default.promisify(fs_1.default.readFile);
    let localImage;
    try {
        const fileBuffer = yield readFile(imageFile);
        localImage = yield imageFromBuffer(fileBuffer);
    }
    catch (error) {
        throw new ImageMissing_1.default(heroName, imageFile);
    }
    if (localImage.height !== localImage.width) {
        throw new InvalidImage_1.default(heroName, 'Local image must be square, but height and width do not match');
    }
    if (!validImageSizes.has(localImage.height)) {
        throw new InvalidImage_1.default(heroName, `Image file must be 200x200 or 201x201, instead got ${localImage.height}x${localImage.height}`);
    }
    // TODO: Check local image has right color
    // TODO: Check local image has the right stars
    // TODO: Load imgur image
    // TODO: Check imgur image matches local image
});
exports["default"] = validateHeroImage;


/***/ }),

/***/ 8475:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkImageType = exports.ImageTypes = void 0;
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
var ImageTypes;
(function (ImageTypes) {
    ImageTypes["PNG"] = "png";
    ImageTypes["JPG"] = "jpg";
})(ImageTypes = exports.ImageTypes || (exports.ImageTypes = {}));
const checkImageType = (config, errorString, value, type) => {
    if (!value.endsWith(`.${type}`)) {
        throw new InvalidConfig_1.default(config, errorString);
    }
};
exports.checkImageType = checkImageType;
const validateImageType = (config, key, value, type) => {
    (0, exports.checkImageType)(config, `${key} must be a ${type}: ${value}`, value, type);
};
exports["default"] = validateImageType;


/***/ }),

/***/ 8471:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const validateKeysMatch = (config, inputKey, setKey) => {
    if (inputKey.toString() !== setKey.toString()) {
        throw new InvalidConfig_1.default(config, `keys do not match: ${inputKey}:${setKey}`);
    }
};
exports["default"] = validateKeysMatch;


/***/ }),

/***/ 5861:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const validateNoDuplicateIds = (config, child, elements) => {
    const ids = new Set();
    for (const element of elements) {
        const id = element.getId();
        if (ids.has(id)) {
            throw new InvalidConfig_1.default(config, `Duplicate ID found | child=${child} | id=${id}`);
        }
        ids.add(id);
    }
};
exports["default"] = validateNoDuplicateIds;


/***/ }),

/***/ 3691:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const verifyKeysAreBooleans = (config, source) => {
    const keys = config.getBooleans();
    for (let key of keys) {
        // @ts-ignore
        const item = (source[key] || '').toString().toLowerCase();
        if (!(0, ohp_1.default)(source, key)) {
            continue;
        }
        switch (item) {
            case 'true':
            case 'false':
                break;
            default:
                throw new InvalidConfig_1.default(config, `key is not a integer: ${key}`);
        }
    }
};
exports["default"] = verifyKeysAreBooleans;


/***/ }),

/***/ 4806:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const verifyKeysAreFloats = (config, source) => {
    const keys = config.getFloats();
    for (let key of keys) {
        // @ts-ignore
        if (!source[key] instanceof String || isNaN(parseFloat(source[key]))) {
            if (!(0, ohp_1.default)(source, key)) {
                continue;
            }
            throw new InvalidConfig_1.default(config, `key is not a float: ${key}`);
        }
    }
};
exports["default"] = verifyKeysAreFloats;


/***/ }),

/***/ 9165:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const verifyKeysAreImages = (config, source) => {
    const keys = config.getImages();
    for (let key of keys) {
        if (!(0, ohp_1.default)(source, key)) {
            continue;
        }
        // @ts-ignore
        const value = source[key];
        // @ts-ignore
        if (!value instanceof String) {
            throw new InvalidConfig_1.default(config, `key is not an imgur link: ${key}:${value}`);
        }
        if (!value.startsWith("https://i.imgur.com/") && !value.startsWith("https://i.imgur.io/")) {
            throw new InvalidConfig_1.default(config, `key is not an imgur link: ${key}:${value}`);
        }
    }
};
exports["default"] = verifyKeysAreImages;


/***/ }),

/***/ 9323:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const verifyKeysAreIntegers = (config, source) => {
    const keys = config.getIntegers();
    for (let key of keys) {
        // @ts-ignore
        if (!source[key] instanceof String || isNaN(parseInt(source[key]))) {
            if (!(0, ohp_1.default)(source, key)) {
                continue;
            }
            throw new InvalidConfig_1.default(config, `key is not a integer: ${key}`);
        }
    }
};
exports["default"] = verifyKeysAreIntegers;


/***/ }),

/***/ 145:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const verifyKeysAreObjects = (config, source) => {
    const keys = config.getObjects();
    for (let key of keys) {
        // @ts-ignore
        if (!source[key] instanceof Object) {
            throw new InvalidConfig_1.default(config, `key is not an object: ${key}`);
        }
    }
};
exports["default"] = verifyKeysAreObjects;


/***/ }),

/***/ 1780:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const InvalidConfig_1 = __importDefault(__nccwpck_require__(7119));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const verifyKeysAreStrings = (config, source) => {
    const keys = config.getStrings();
    for (let key of keys) {
        if (!(0, ohp_1.default)(source, key)) {
            continue;
        }
        // @ts-ignore
        if (!source[key] instanceof String) {
            throw new InvalidConfig_1.default(config, `key is not a string: ${key}`);
        }
    }
};
exports["default"] = verifyKeysAreStrings;


/***/ }),

/***/ 1963:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ohp_1 = __importDefault(__nccwpck_require__(1439));
const MissingRequiredKey_1 = __importDefault(__nccwpck_require__(2230));
const verifyRequiredKeys = (config, source) => {
    const requiredKeys = config.getRequiredKeys();
    for (let key of requiredKeys) {
        if (!(0, ohp_1.default)(source, key)) {
            throw new MissingRequiredKey_1.default(config, key, source);
        }
    }
};
exports["default"] = verifyRequiredKeys;


/***/ }),

/***/ 9912:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadYamlFileArray = exports.loadYamlFile = exports.loadFile = void 0;
const fs_1 = __importDefault(__nccwpck_require__(7147));
const FileLoadFailed_1 = __importDefault(__nccwpck_require__(3042));
const util_1 = __importDefault(__nccwpck_require__(3837));
const YamlParseFailed_1 = __importDefault(__nccwpck_require__(637));
const yaml = __importStar(__nccwpck_require__(1917));
const core = __importStar(__nccwpck_require__(2186));
const loadFile = (filename) => __awaiter(void 0, void 0, void 0, function* () {
    let fileContents;
    const readFile = util_1.default.promisify(fs_1.default.readFile);
    try {
        fileContents = yield readFile(filename);
    }
    catch (error) {
        core.setFailed(`Could not load yaml file at ${filename}`);
        throw new FileLoadFailed_1.default(filename, 'Could not load file');
    }
    try {
        return yaml.load(Buffer.from(fileContents).toString());
    }
    catch (error) {
        core.setFailed(`Could not parse yaml file at ${filename}`);
        throw new YamlParseFailed_1.default(filename, 'Could not parse yaml file');
    }
});
exports.loadFile = loadFile;
const loadYamlFile = (filename) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, exports.loadFile)(filename); });
exports.loadYamlFile = loadYamlFile;
const loadYamlFileArray = (filename) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, exports.loadFile)(filename); });
exports.loadYamlFileArray = loadYamlFileArray;


/***/ }),

/***/ 7351:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(2037));
const utils_1 = __nccwpck_require__(5278);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 2186:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(7351);
const file_command_1 = __nccwpck_require__(717);
const utils_1 = __nccwpck_require__(5278);
const os = __importStar(__nccwpck_require__(2037));
const path = __importStar(__nccwpck_require__(1017));
const oidc_utils_1 = __nccwpck_require__(8041);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('ENV', file_command_1.prepareKeyValueMessage(name, val));
    }
    command_1.issueCommand('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueFileCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('OUTPUT', file_command_1.prepareKeyValueMessage(name, value));
    }
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, utils_1.toCommandValue(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    command_1.issueCommand('error', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    command_1.issueCommand('warning', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    command_1.issueCommand('notice', utils_1.toCommandProperties(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return file_command_1.issueFileCommand('STATE', file_command_1.prepareKeyValueMessage(name, value));
    }
    command_1.issueCommand('save-state', { name }, utils_1.toCommandValue(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(1327);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(1327);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(2981);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 717:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(7147));
const os = __importStar(__nccwpck_require__(2037));
const uuid_1 = __nccwpck_require__(5840);
const utils_1 = __nccwpck_require__(5278);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${uuid_1.v4()}`;
    const convertedValue = utils_1.toCommandValue(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 8041:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(6255);
const auth_1 = __nccwpck_require__(5526);
const core_1 = __nccwpck_require__(2186);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.result.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                core_1.debug(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                core_1.setSecret(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 2981:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(1017));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 1327:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(2037);
const fs_1 = __nccwpck_require__(7147);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 5278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 5526:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 6255:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(3685));
const https = __importStar(__nccwpck_require__(5687));
const pm = __importStar(__nccwpck_require__(9835));
const tunnel = __importStar(__nccwpck_require__(4294));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9835:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        return new URL(proxyVar);
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 771:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

const Canvas = __nccwpck_require__(4786)
const Image = __nccwpck_require__(1767)
const CanvasRenderingContext2D = __nccwpck_require__(7389)
const CanvasPattern = __nccwpck_require__(7608)
const parseFont = __nccwpck_require__(6018)
const packageJson = __nccwpck_require__(8392)
const bindings = __nccwpck_require__(4829)
const fs = __nccwpck_require__(7147)
const PNGStream = __nccwpck_require__(734)
const PDFStream = __nccwpck_require__(5977)
const JPEGStream = __nccwpck_require__(2503)
const { DOMPoint, DOMMatrix } = __nccwpck_require__(5812)

function createCanvas (width, height, type) {
  return new Canvas(width, height, type)
}

function createImageData (array, width, height) {
  return new bindings.ImageData(array, width, height)
}

function loadImage (src) {
  return new Promise((resolve, reject) => {
    const image = new Image()

    function cleanup () {
      image.onload = null
      image.onerror = null
    }

    image.onload = () => { cleanup(); resolve(image) }
    image.onerror = (err) => { cleanup(); reject(err) }

    image.src = src
  })
}

/**
 * Resolve paths for registerFont. Must be called *before* creating a Canvas
 * instance.
 * @param src {string} Path to font file.
 * @param fontFace {{family: string, weight?: string, style?: string}} Object
 * specifying font information. `weight` and `style` default to `"normal"`.
 */
function registerFont (src, fontFace) {
  // TODO this doesn't need to be on Canvas; it should just be a static method
  // of `bindings`.
  return Canvas._registerFont(fs.realpathSync(src), fontFace)
}

/**
 * Unload all fonts from pango to free up memory
 */
function deregisterAllFonts () {
  return Canvas._deregisterAllFonts()
}

exports.Canvas = Canvas
exports.Context2d = CanvasRenderingContext2D // Legacy/compat export
exports.CanvasRenderingContext2D = CanvasRenderingContext2D
exports.CanvasGradient = bindings.CanvasGradient
exports.CanvasPattern = CanvasPattern
exports.Image = Image
exports.ImageData = bindings.ImageData
exports.PNGStream = PNGStream
exports.PDFStream = PDFStream
exports.JPEGStream = JPEGStream
exports.DOMMatrix = DOMMatrix
exports.DOMPoint = DOMPoint

exports.registerFont = registerFont
exports.deregisterAllFonts = deregisterAllFonts
exports.parseFont = parseFont

exports.createCanvas = createCanvas
exports.createImageData = createImageData
exports.loadImage = loadImage

exports.backends = bindings.Backends

/** Library version. */
exports.version = packageJson.version
/** Cairo version. */
exports.cairoVersion = bindings.cairoVersion
/** jpeglib version. */
exports.jpegVersion = bindings.jpegVersion
/** gif_lib version. */
exports.gifVersion = bindings.gifVersion ? bindings.gifVersion.replace(/[^.\d]/g, '') : undefined
/** freetype version. */
exports.freetypeVersion = bindings.freetypeVersion
/** rsvg version. */
exports.rsvgVersion = bindings.rsvgVersion
/** pango version. */
exports.pangoVersion = bindings.pangoVersion


/***/ }),

/***/ 5812:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const util = __nccwpck_require__(3837)

// DOMMatrix per https://drafts.fxtf.org/geometry/#DOMMatrix

class DOMPoint {
  constructor (x, y, z, w) {
    if (typeof x === 'object' && x !== null) {
      w = x.w
      z = x.z
      y = x.y
      x = x.x
    }
    this.x = typeof x === 'number' ? x : 0
    this.y = typeof y === 'number' ? y : 0
    this.z = typeof z === 'number' ? z : 0
    this.w = typeof w === 'number' ? w : 1
  }
}

// Constants to index into _values (col-major)
const M11 = 0; const M12 = 1; const M13 = 2; const M14 = 3
const M21 = 4; const M22 = 5; const M23 = 6; const M24 = 7
const M31 = 8; const M32 = 9; const M33 = 10; const M34 = 11
const M41 = 12; const M42 = 13; const M43 = 14; const M44 = 15

const DEGREE_PER_RAD = 180 / Math.PI
const RAD_PER_DEGREE = Math.PI / 180

function parseMatrix (init) {
  let parsed = init.replace('matrix(', '')
  parsed = parsed.split(',', 7) // 6 + 1 to handle too many params
  if (parsed.length !== 6) throw new Error(`Failed to parse ${init}`)
  parsed = parsed.map(parseFloat)
  return [
    parsed[0], parsed[1], 0, 0,
    parsed[2], parsed[3], 0, 0,
    0, 0, 1, 0,
    parsed[4], parsed[5], 0, 1
  ]
}

function parseMatrix3d (init) {
  let parsed = init.replace('matrix3d(', '')
  parsed = parsed.split(',', 17) // 16 + 1 to handle too many params
  if (parsed.length !== 16) throw new Error(`Failed to parse ${init}`)
  return parsed.map(parseFloat)
}

function parseTransform (tform) {
  const type = tform.split('(', 1)[0]
  switch (type) {
    case 'matrix':
      return parseMatrix(tform)
    case 'matrix3d':
      return parseMatrix3d(tform)
    // TODO This is supposed to support any CSS transform value.
    default:
      throw new Error(`${type} parsing not implemented`)
  }
}

class DOMMatrix {
  constructor (init) {
    this._is2D = true
    this._values = new Float64Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])

    let i

    if (typeof init === 'string') { // parse CSS transformList
      if (init === '') return // default identity matrix
      const tforms = init.split(/\)\s+/, 20).map(parseTransform)
      if (tforms.length === 0) return
      init = tforms[0]
      for (i = 1; i < tforms.length; i++) init = multiply(tforms[i], init)
    }

    i = 0
    if (init && init.length === 6) {
      setNumber2D(this, M11, init[i++])
      setNumber2D(this, M12, init[i++])
      setNumber2D(this, M21, init[i++])
      setNumber2D(this, M22, init[i++])
      setNumber2D(this, M41, init[i++])
      setNumber2D(this, M42, init[i++])
    } else if (init && init.length === 16) {
      setNumber2D(this, M11, init[i++])
      setNumber2D(this, M12, init[i++])
      setNumber3D(this, M13, init[i++])
      setNumber3D(this, M14, init[i++])
      setNumber2D(this, M21, init[i++])
      setNumber2D(this, M22, init[i++])
      setNumber3D(this, M23, init[i++])
      setNumber3D(this, M24, init[i++])
      setNumber3D(this, M31, init[i++])
      setNumber3D(this, M32, init[i++])
      setNumber3D(this, M33, init[i++])
      setNumber3D(this, M34, init[i++])
      setNumber2D(this, M41, init[i++])
      setNumber2D(this, M42, init[i++])
      setNumber3D(this, M43, init[i++])
      setNumber3D(this, M44, init[i])
    } else if (init !== undefined) {
      throw new TypeError('Expected string or array.')
    }
  }

  toString () {
    return this.is2D
      ? `matrix(${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.e}, ${this.f})`
      : `matrix3d(${this._values.join(', ')})`
  }

  multiply (other) {
    return newInstance(this._values).multiplySelf(other)
  }

  multiplySelf (other) {
    this._values = multiply(other._values, this._values)
    if (!other.is2D) this._is2D = false
    return this
  }

  preMultiplySelf (other) {
    this._values = multiply(this._values, other._values)
    if (!other.is2D) this._is2D = false
    return this
  }

  translate (tx, ty, tz) {
    return newInstance(this._values).translateSelf(tx, ty, tz)
  }

  translateSelf (tx, ty, tz) {
    if (typeof tx !== 'number') tx = 0
    if (typeof ty !== 'number') ty = 0
    if (typeof tz !== 'number') tz = 0
    this._values = multiply([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      tx, ty, tz, 1
    ], this._values)
    if (tz !== 0) this._is2D = false
    return this
  }

  scale (scaleX, scaleY, scaleZ, originX, originY, originZ) {
    return newInstance(this._values).scaleSelf(scaleX, scaleY, scaleZ, originX, originY, originZ)
  }

  scale3d (scale, originX, originY, originZ) {
    return newInstance(this._values).scale3dSelf(scale, originX, originY, originZ)
  }

  scale3dSelf (scale, originX, originY, originZ) {
    return this.scaleSelf(scale, scale, scale, originX, originY, originZ)
  }

  scaleSelf (scaleX, scaleY, scaleZ, originX, originY, originZ) {
    // Not redundant with translate's checks because we need to negate the values later.
    if (typeof originX !== 'number') originX = 0
    if (typeof originY !== 'number') originY = 0
    if (typeof originZ !== 'number') originZ = 0
    this.translateSelf(originX, originY, originZ)
    if (typeof scaleX !== 'number') scaleX = 1
    if (typeof scaleY !== 'number') scaleY = scaleX
    if (typeof scaleZ !== 'number') scaleZ = 1
    this._values = multiply([
      scaleX, 0, 0, 0,
      0, scaleY, 0, 0,
      0, 0, scaleZ, 0,
      0, 0, 0, 1
    ], this._values)
    this.translateSelf(-originX, -originY, -originZ)
    if (scaleZ !== 1 || originZ !== 0) this._is2D = false
    return this
  }

  rotateFromVector (x, y) {
    return newInstance(this._values).rotateFromVectorSelf(x, y)
  }

  rotateFromVectorSelf (x, y) {
    if (typeof x !== 'number') x = 0
    if (typeof y !== 'number') y = 0
    const theta = (x === 0 && y === 0) ? 0 : Math.atan2(y, x) * DEGREE_PER_RAD
    return this.rotateSelf(theta)
  }

  rotate (rotX, rotY, rotZ) {
    return newInstance(this._values).rotateSelf(rotX, rotY, rotZ)
  }

  rotateSelf (rotX, rotY, rotZ) {
    if (rotY === undefined && rotZ === undefined) {
      rotZ = rotX
      rotX = rotY = 0
    }
    if (typeof rotY !== 'number') rotY = 0
    if (typeof rotZ !== 'number') rotZ = 0
    if (rotX !== 0 || rotY !== 0) this._is2D = false
    rotX *= RAD_PER_DEGREE
    rotY *= RAD_PER_DEGREE
    rotZ *= RAD_PER_DEGREE
    let c, s
    c = Math.cos(rotZ)
    s = Math.sin(rotZ)
    this._values = multiply([
      c, s, 0, 0,
      -s, c, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ], this._values)
    c = Math.cos(rotY)
    s = Math.sin(rotY)
    this._values = multiply([
      c, 0, -s, 0,
      0, 1, 0, 0,
      s, 0, c, 0,
      0, 0, 0, 1
    ], this._values)
    c = Math.cos(rotX)
    s = Math.sin(rotX)
    this._values = multiply([
      1, 0, 0, 0,
      0, c, s, 0,
      0, -s, c, 0,
      0, 0, 0, 1
    ], this._values)
    return this
  }

  rotateAxisAngle (x, y, z, angle) {
    return newInstance(this._values).rotateAxisAngleSelf(x, y, z, angle)
  }

  rotateAxisAngleSelf (x, y, z, angle) {
    if (typeof x !== 'number') x = 0
    if (typeof y !== 'number') y = 0
    if (typeof z !== 'number') z = 0
    // Normalize axis
    const length = Math.sqrt(x * x + y * y + z * z)
    if (length === 0) return this
    if (length !== 1) {
      x /= length
      y /= length
      z /= length
    }
    angle *= RAD_PER_DEGREE
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    const t = 1 - c
    const tx = t * x
    const ty = t * y
    // NB: This is the generic transform. If the axis is a major axis, there are
    // faster transforms.
    this._values = multiply([
      tx * x + c, tx * y + s * z, tx * z - s * y, 0,
      tx * y - s * z, ty * y + c, ty * z + s * x, 0,
      tx * z + s * y, ty * z - s * x, t * z * z + c, 0,
      0, 0, 0, 1
    ], this._values)
    if (x !== 0 || y !== 0) this._is2D = false
    return this
  }

  skewX (sx) {
    return newInstance(this._values).skewXSelf(sx)
  }

  skewXSelf (sx) {
    if (typeof sx !== 'number') return this
    const t = Math.tan(sx * RAD_PER_DEGREE)
    this._values = multiply([
      1, 0, 0, 0,
      t, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ], this._values)
    return this
  }

  skewY (sy) {
    return newInstance(this._values).skewYSelf(sy)
  }

  skewYSelf (sy) {
    if (typeof sy !== 'number') return this
    const t = Math.tan(sy * RAD_PER_DEGREE)
    this._values = multiply([
      1, t, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ], this._values)
    return this
  }

  flipX () {
    return newInstance(multiply([
      -1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ], this._values))
  }

  flipY () {
    return newInstance(multiply([
      1, 0, 0, 0,
      0, -1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ], this._values))
  }

  inverse () {
    return newInstance(this._values).invertSelf()
  }

  invertSelf () {
    const m = this._values
    const inv = m.map(v => 0)

    inv[0] = m[5] * m[10] * m[15] -
            m[5] * m[11] * m[14] -
            m[9] * m[6] * m[15] +
            m[9] * m[7] * m[14] +
            m[13] * m[6] * m[11] -
            m[13] * m[7] * m[10]

    inv[4] = -m[4] * m[10] * m[15] +
            m[4] * m[11] * m[14] +
            m[8] * m[6] * m[15] -
            m[8] * m[7] * m[14] -
            m[12] * m[6] * m[11] +
            m[12] * m[7] * m[10]

    inv[8] = m[4] * m[9] * m[15] -
            m[4] * m[11] * m[13] -
            m[8] * m[5] * m[15] +
            m[8] * m[7] * m[13] +
            m[12] * m[5] * m[11] -
            m[12] * m[7] * m[9]

    inv[12] = -m[4] * m[9] * m[14] +
            m[4] * m[10] * m[13] +
            m[8] * m[5] * m[14] -
            m[8] * m[6] * m[13] -
            m[12] * m[5] * m[10] +
            m[12] * m[6] * m[9]

    // If the determinant is zero, this matrix cannot be inverted, and all
    // values should be set to NaN, with the is2D flag set to false.

    const det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12]

    if (det === 0) {
      this._values = m.map(v => NaN)
      this._is2D = false
      return this
    }

    inv[1] = -m[1] * m[10] * m[15] +
            m[1] * m[11] * m[14] +
            m[9] * m[2] * m[15] -
            m[9] * m[3] * m[14] -
            m[13] * m[2] * m[11] +
            m[13] * m[3] * m[10]

    inv[5] = m[0] * m[10] * m[15] -
            m[0] * m[11] * m[14] -
            m[8] * m[2] * m[15] +
            m[8] * m[3] * m[14] +
            m[12] * m[2] * m[11] -
            m[12] * m[3] * m[10]

    inv[9] = -m[0] * m[9] * m[15] +
            m[0] * m[11] * m[13] +
            m[8] * m[1] * m[15] -
            m[8] * m[3] * m[13] -
            m[12] * m[1] * m[11] +
            m[12] * m[3] * m[9]

    inv[13] = m[0] * m[9] * m[14] -
            m[0] * m[10] * m[13] -
            m[8] * m[1] * m[14] +
            m[8] * m[2] * m[13] +
            m[12] * m[1] * m[10] -
            m[12] * m[2] * m[9]

    inv[2] = m[1] * m[6] * m[15] -
            m[1] * m[7] * m[14] -
            m[5] * m[2] * m[15] +
            m[5] * m[3] * m[14] +
            m[13] * m[2] * m[7] -
            m[13] * m[3] * m[6]

    inv[6] = -m[0] * m[6] * m[15] +
            m[0] * m[7] * m[14] +
            m[4] * m[2] * m[15] -
            m[4] * m[3] * m[14] -
            m[12] * m[2] * m[7] +
            m[12] * m[3] * m[6]

    inv[10] = m[0] * m[5] * m[15] -
            m[0] * m[7] * m[13] -
            m[4] * m[1] * m[15] +
            m[4] * m[3] * m[13] +
            m[12] * m[1] * m[7] -
            m[12] * m[3] * m[5]

    inv[14] = -m[0] * m[5] * m[14] +
            m[0] * m[6] * m[13] +
            m[4] * m[1] * m[14] -
            m[4] * m[2] * m[13] -
            m[12] * m[1] * m[6] +
            m[12] * m[2] * m[5]

    inv[3] = -m[1] * m[6] * m[11] +
            m[1] * m[7] * m[10] +
            m[5] * m[2] * m[11] -
            m[5] * m[3] * m[10] -
            m[9] * m[2] * m[7] +
            m[9] * m[3] * m[6]

    inv[7] = m[0] * m[6] * m[11] -
            m[0] * m[7] * m[10] -
            m[4] * m[2] * m[11] +
            m[4] * m[3] * m[10] +
            m[8] * m[2] * m[7] -
            m[8] * m[3] * m[6]

    inv[11] = -m[0] * m[5] * m[11] +
            m[0] * m[7] * m[9] +
            m[4] * m[1] * m[11] -
            m[4] * m[3] * m[9] -
            m[8] * m[1] * m[7] +
            m[8] * m[3] * m[5]

    inv[15] = m[0] * m[5] * m[10] -
            m[0] * m[6] * m[9] -
            m[4] * m[1] * m[10] +
            m[4] * m[2] * m[9] +
            m[8] * m[1] * m[6] -
            m[8] * m[2] * m[5]

    inv.forEach((v, i) => { inv[i] = v / det })
    this._values = inv
    return this
  }

  setMatrixValue (transformList) {
    const temp = new DOMMatrix(transformList)
    this._values = temp._values
    this._is2D = temp._is2D
    return this
  }

  transformPoint (point) {
    point = new DOMPoint(point)
    const x = point.x
    const y = point.y
    const z = point.z
    const w = point.w
    const values = this._values
    const nx = values[M11] * x + values[M21] * y + values[M31] * z + values[M41] * w
    const ny = values[M12] * x + values[M22] * y + values[M32] * z + values[M42] * w
    const nz = values[M13] * x + values[M23] * y + values[M33] * z + values[M43] * w
    const nw = values[M14] * x + values[M24] * y + values[M34] * z + values[M44] * w
    return new DOMPoint(nx, ny, nz, nw)
  }

  toFloat32Array () {
    return Float32Array.from(this._values)
  }

  toFloat64Array () {
    return this._values.slice(0)
  }

  static fromMatrix (init) {
    if (!(init instanceof DOMMatrix)) throw new TypeError('Expected DOMMatrix')
    return new DOMMatrix(init._values)
  }

  static fromFloat32Array (init) {
    if (!(init instanceof Float32Array)) throw new TypeError('Expected Float32Array')
    return new DOMMatrix(init)
  }

  static fromFloat64Array (init) {
    if (!(init instanceof Float64Array)) throw new TypeError('Expected Float64Array')
    return new DOMMatrix(init)
  }

  [util.inspect.custom || 'inspect'] (depth, options) {
    if (depth < 0) return '[DOMMatrix]'

    return `DOMMatrix [
      a: ${this.a}
      b: ${this.b}
      c: ${this.c}
      d: ${this.d}
      e: ${this.e}
      f: ${this.f}
      m11: ${this.m11}
      m12: ${this.m12}
      m13: ${this.m13}
      m14: ${this.m14}
      m21: ${this.m21}
      m22: ${this.m22}
      m23: ${this.m23}
      m23: ${this.m23}
      m31: ${this.m31}
      m32: ${this.m32}
      m33: ${this.m33}
      m34: ${this.m34}
      m41: ${this.m41}
      m42: ${this.m42}
      m43: ${this.m43}
      m44: ${this.m44}
      is2D: ${this.is2D}
      isIdentity: ${this.isIdentity} ]`
  }
}

/**
 * Checks that `value` is a number and sets the value.
 */
function setNumber2D (receiver, index, value) {
  if (typeof value !== 'number') throw new TypeError('Expected number')
  return (receiver._values[index] = value)
}

/**
 * Checks that `value` is a number, sets `_is2D = false` if necessary and sets
 * the value.
 */
function setNumber3D (receiver, index, value) {
  if (typeof value !== 'number') throw new TypeError('Expected number')
  if (index === M33 || index === M44) {
    if (value !== 1) receiver._is2D = false
  } else if (value !== 0) receiver._is2D = false
  return (receiver._values[index] = value)
}

Object.defineProperties(DOMMatrix.prototype, {
  m11: { get () { return this._values[M11] }, set (v) { return setNumber2D(this, M11, v) } },
  m12: { get () { return this._values[M12] }, set (v) { return setNumber2D(this, M12, v) } },
  m13: { get () { return this._values[M13] }, set (v) { return setNumber3D(this, M13, v) } },
  m14: { get () { return this._values[M14] }, set (v) { return setNumber3D(this, M14, v) } },
  m21: { get () { return this._values[M21] }, set (v) { return setNumber2D(this, M21, v) } },
  m22: { get () { return this._values[M22] }, set (v) { return setNumber2D(this, M22, v) } },
  m23: { get () { return this._values[M23] }, set (v) { return setNumber3D(this, M23, v) } },
  m24: { get () { return this._values[M24] }, set (v) { return setNumber3D(this, M24, v) } },
  m31: { get () { return this._values[M31] }, set (v) { return setNumber3D(this, M31, v) } },
  m32: { get () { return this._values[M32] }, set (v) { return setNumber3D(this, M32, v) } },
  m33: { get () { return this._values[M33] }, set (v) { return setNumber3D(this, M33, v) } },
  m34: { get () { return this._values[M34] }, set (v) { return setNumber3D(this, M34, v) } },
  m41: { get () { return this._values[M41] }, set (v) { return setNumber2D(this, M41, v) } },
  m42: { get () { return this._values[M42] }, set (v) { return setNumber2D(this, M42, v) } },
  m43: { get () { return this._values[M43] }, set (v) { return setNumber3D(this, M43, v) } },
  m44: { get () { return this._values[M44] }, set (v) { return setNumber3D(this, M44, v) } },

  a: { get () { return this.m11 }, set (v) { return (this.m11 = v) } },
  b: { get () { return this.m12 }, set (v) { return (this.m12 = v) } },
  c: { get () { return this.m21 }, set (v) { return (this.m21 = v) } },
  d: { get () { return this.m22 }, set (v) { return (this.m22 = v) } },
  e: { get () { return this.m41 }, set (v) { return (this.m41 = v) } },
  f: { get () { return this.m42 }, set (v) { return (this.m42 = v) } },

  is2D: { get () { return this._is2D } }, // read-only

  isIdentity: {
    get () {
      const values = this._values
      return (values[M11] === 1 && values[M12] === 0 && values[M13] === 0 && values[M14] === 0 &&
             values[M21] === 0 && values[M22] === 1 && values[M23] === 0 && values[M24] === 0 &&
             values[M31] === 0 && values[M32] === 0 && values[M33] === 1 && values[M34] === 0 &&
             values[M41] === 0 && values[M42] === 0 && values[M43] === 0 && values[M44] === 1)
    }
  }
})

/**
 * Instantiates a DOMMatrix, bypassing the constructor.
 * @param {Float64Array} values Value to assign to `_values`. This is assigned
 *   without copying (okay because all usages are followed by a  multiply).
 */
function newInstance (values) {
  const instance = Object.create(DOMMatrix.prototype)
  instance.constructor = DOMMatrix
  instance._is2D = true
  instance._values = values
  return instance
}

function multiply (A, B) {
  const dest = new Float64Array(16)
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0
      for (let k = 0; k < 4; k++) {
        sum += A[i * 4 + k] * B[k * 4 + j]
      }
      dest[i * 4 + j] = sum
    }
  }
  return dest
}

module.exports = { DOMMatrix, DOMPoint }


/***/ }),

/***/ 4829:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const bindings = __nccwpck_require__(3756)

module.exports = bindings

bindings.ImageData.prototype.toString = function () {
	return '[object ImageData]'
}

bindings.CanvasGradient.prototype.toString = function () {
	return '[object CanvasGradient]'
}


/***/ }),

/***/ 4786:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*!
 * Canvas
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

const bindings = __nccwpck_require__(4829)
const Canvas = module.exports = bindings.Canvas
const Context2d = __nccwpck_require__(7389)
const PNGStream = __nccwpck_require__(734)
const PDFStream = __nccwpck_require__(5977)
const JPEGStream = __nccwpck_require__(2503)
const FORMATS = ['image/png', 'image/jpeg']
const util = __nccwpck_require__(3837)

// TODO || is for Node.js pre-v6.6.0
Canvas.prototype[util.inspect.custom || 'inspect'] = function () {
  return `[Canvas ${this.width}x${this.height}]`
}

Canvas.prototype.getContext = function (contextType, contextAttributes) {
  if (contextType == '2d') {
    const ctx = this._context2d || (this._context2d = new Context2d(this, contextAttributes))
    this.context = ctx
    ctx.canvas = this
    return ctx
  }
}

Canvas.prototype.pngStream =
Canvas.prototype.createPNGStream = function (options) {
  return new PNGStream(this, options)
}

Canvas.prototype.pdfStream =
Canvas.prototype.createPDFStream = function (options) {
  return new PDFStream(this, options)
}

Canvas.prototype.jpegStream =
Canvas.prototype.createJPEGStream = function (options) {
  return new JPEGStream(this, options)
}

Canvas.prototype.toDataURL = function (a1, a2, a3) {
  // valid arg patterns (args -> [type, opts, fn]):
  // [] -> ['image/png', null, null]
  // [qual] -> ['image/png', null, null]
  // [undefined] -> ['image/png', null, null]
  // ['image/png'] -> ['image/png', null, null]
  // ['image/png', qual] -> ['image/png', null, null]
  // [fn] -> ['image/png', null, fn]
  // [type, fn] -> [type, null, fn]
  // [undefined, fn] -> ['image/png', null, fn]
  // ['image/png', qual, fn] -> ['image/png', null, fn]
  // ['image/jpeg', fn] -> ['image/jpeg', null, fn]
  // ['image/jpeg', opts, fn] -> ['image/jpeg', opts, fn]
  // ['image/jpeg', qual, fn] -> ['image/jpeg', {quality: qual}, fn]
  // ['image/jpeg', undefined, fn] -> ['image/jpeg', null, fn]
  // ['image/jpeg'] -> ['image/jpeg', null, fn]
  // ['image/jpeg', opts] -> ['image/jpeg', opts, fn]
  // ['image/jpeg', qual] -> ['image/jpeg', {quality: qual}, fn]

  let type = 'image/png'
  let opts = {}
  let fn

  if (typeof a1 === 'function') {
    fn = a1
  } else {
    if (typeof a1 === 'string' && FORMATS.includes(a1.toLowerCase())) {
      type = a1.toLowerCase()
    }

    if (typeof a2 === 'function') {
      fn = a2
    } else {
      if (typeof a2 === 'object') {
        opts = a2
      } else if (typeof a2 === 'number') {
        opts = { quality: Math.max(0, Math.min(1, a2)) }
      }

      if (typeof a3 === 'function') {
        fn = a3
      } else if (undefined !== a3) {
        throw new TypeError(`${typeof a3} is not a function`)
      }
    }
  }

  if (this.width === 0 || this.height === 0) {
    // Per spec, if the bitmap has no pixels, return this string:
    const str = 'data:,'
    if (fn) {
      setTimeout(() => fn(null, str))
      return
    } else {
      return str
    }
  }

  if (fn) {
    this.toBuffer((err, buf) => {
      if (err) return fn(err)
      fn(null, `data:${type};base64,${buf.toString('base64')}`)
    }, type, opts)
  } else {
    return `data:${type};base64,${this.toBuffer(type, opts).toString('base64')}`
  }
}


/***/ }),

/***/ 7389:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*!
 * Canvas - Context2d
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

const bindings = __nccwpck_require__(4829)
const parseFont = __nccwpck_require__(6018)
const { DOMMatrix } = __nccwpck_require__(5812)

bindings.CanvasRenderingContext2dInit(DOMMatrix, parseFont)
module.exports = bindings.CanvasRenderingContext2d


/***/ }),

/***/ 1767:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*!
 * Canvas - Image
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

const bindings = __nccwpck_require__(4829)
const Image = module.exports = bindings.Image
const util = __nccwpck_require__(3837)

// Lazily loaded simple-get
let get

const { GetSource, SetSource } = bindings

Object.defineProperty(Image.prototype, 'src', {
  /**
   * src setter. Valid values:
   *  * `data:` URI
   *  * Local file path
   *  * HTTP or HTTPS URL
   *  * Buffer containing image data (i.e. not a `data:` URI stored in a Buffer)
   *
   * @param {String|Buffer} val filename, buffer, data URI, URL
   * @api public
   */
  set (val) {
    if (typeof val === 'string') {
      if (/^\s*data:/.test(val)) { // data: URI
        const commaI = val.indexOf(',')
        // 'base64' must come before the comma
        const isBase64 = val.lastIndexOf('base64', commaI) !== -1
        const content = val.slice(commaI + 1)
        setSource(this, Buffer.from(content, isBase64 ? 'base64' : 'utf8'), val)
      } else if (/^\s*https?:\/\//.test(val)) { // remote URL
        const onerror = err => {
          if (typeof this.onerror === 'function') {
            this.onerror(err)
          } else {
            throw err
          }
        }

        if (!get) get = __nccwpck_require__(2522)

        get.concat({
          url: val,
          headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36' }
        }, (err, res, data) => {
          if (err) return onerror(err)

          if (res.statusCode < 200 || res.statusCode >= 300) {
            return onerror(new Error(`Server responded with ${res.statusCode}`))
          }

          setSource(this, data)
        })
      } else { // local file path assumed
        setSource(this, val)
      }
    } else if (Buffer.isBuffer(val)) {
      setSource(this, val)
    }
  },

  get () {
    // TODO https://github.com/Automattic/node-canvas/issues/118
    return getSource(this)
  },

  configurable: true
})

// TODO || is for Node.js pre-v6.6.0
Image.prototype[util.inspect.custom || 'inspect'] = function () {
  return '[Image' +
    (this.complete ? ':' + this.width + 'x' + this.height : '') +
    (this.src ? ' ' + this.src : '') +
    (this.complete ? ' complete' : '') +
    ']'
}

function getSource (img) {
  return img._originalSource || GetSource.call(img)
}

function setSource (img, src, origSrc) {
  SetSource.call(img, src)
  img._originalSource = origSrc
}


/***/ }),

/***/ 2503:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*!
 * Canvas - JPEGStream
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

const { Readable } = __nccwpck_require__(2781)
function noop () {}

class JPEGStream extends Readable {
  constructor (canvas, options) {
    super()

    if (canvas.streamJPEGSync === undefined) {
      throw new Error('node-canvas was built without JPEG support.')
    }

    this.options = options
    this.canvas = canvas
  }

  _read () {
    // For now we're not controlling the c++ code's data emission, so we only
    // call canvas.streamJPEGSync once and let it emit data at will.
    this._read = noop

    this.canvas.streamJPEGSync(this.options, (err, chunk) => {
      if (err) {
        this.emit('error', err)
      } else if (chunk) {
        this.push(chunk)
      } else {
        this.push(null)
      }
    })
  }
};

module.exports = JPEGStream


/***/ }),

/***/ 6018:
/***/ ((module) => {

"use strict";


/**
 * Font RegExp helpers.
 */

const weights = 'bold|bolder|lighter|[1-9]00'
const styles = 'italic|oblique'
const variants = 'small-caps'
const stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded'
const units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q'
const string = '\'([^\']+)\'|"([^"]+)"|[\\w\\s-]+'

// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop
const weightRe = new RegExp(`(${weights}) +`, 'i')
const styleRe = new RegExp(`(${styles}) +`, 'i')
const variantRe = new RegExp(`(${variants}) +`, 'i')
const stretchRe = new RegExp(`(${stretches}) +`, 'i')
const sizeFamilyRe = new RegExp(
  `([\\d\\.]+)(${units}) *((?:${string})( *, *(?:${string}))*)`)

/**
 * Cache font parsing.
 */

const cache = {}

const defaultHeight = 16 // pt, common browser default

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

module.exports = str => {
  // Cached
  if (cache[str]) return cache[str]

  // Try for required properties first.
  const sizeFamily = sizeFamilyRe.exec(str)
  if (!sizeFamily) return // invalid

  // Default values and required properties
  const font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')
  }

  // Optional, unordered properties.
  let weight, style, variant, stretch
  // Stop search at `sizeFamily.index`
  const substr = str.substring(0, sizeFamily.index)
  if ((weight = weightRe.exec(substr))) font.weight = weight[1]
  if ((style = styleRe.exec(substr))) font.style = style[1]
  if ((variant = variantRe.exec(substr))) font.variant = variant[1]
  if ((stretch = stretchRe.exec(substr))) font.stretch = stretch[1]

  // Convert to device units. (`font.unit` is the original unit)
  // TODO: ch, ex
  switch (font.unit) {
    case 'pt':
      font.size /= 0.75
      break
    case 'pc':
      font.size *= 16
      break
    case 'in':
      font.size *= 96
      break
    case 'cm':
      font.size *= 96.0 / 2.54
      break
    case 'mm':
      font.size *= 96.0 / 25.4
      break
    case '%':
      // TODO disabled because existing unit tests assume 100
      // font.size *= defaultHeight / 100 / 0.75
      break
    case 'em':
    case 'rem':
      font.size *= defaultHeight / 0.75
      break
    case 'q':
      font.size *= 96 / 25.4 / 4
      break
  }

  return (cache[str] = font)
}


/***/ }),

/***/ 7608:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*!
 * Canvas - CanvasPattern
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

const bindings = __nccwpck_require__(4829)
const { DOMMatrix } = __nccwpck_require__(5812)

bindings.CanvasPatternInit(DOMMatrix)
module.exports = bindings.CanvasPattern

bindings.CanvasPattern.prototype.toString = function () {
	return '[object CanvasPattern]'
}


/***/ }),

/***/ 5977:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*!
 * Canvas - PDFStream
 */

const { Readable } = __nccwpck_require__(2781)
function noop () {}

class PDFStream extends Readable {
  constructor (canvas, options) {
    super()

    this.canvas = canvas
    this.options = options
  }

  _read () {
    // For now we're not controlling the c++ code's data emission, so we only
    // call canvas.streamPDFSync once and let it emit data at will.
    this._read = noop

    this.canvas.streamPDFSync((err, chunk, len) => {
      if (err) {
        this.emit('error', err)
      } else if (len) {
        this.push(chunk)
      } else {
        this.push(null)
      }
    }, this.options)
  }
}

module.exports = PDFStream


/***/ }),

/***/ 734:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*!
 * Canvas - PNGStream
 * Copyright (c) 2010 LearnBoost <tj@learnboost.com>
 * MIT Licensed
 */

const { Readable } = __nccwpck_require__(2781)
function noop () {}

class PNGStream extends Readable {
  constructor (canvas, options) {
    super()

    if (options &&
      options.palette instanceof Uint8ClampedArray &&
      options.palette.length % 4 !== 0) {
      throw new Error('Palette length must be a multiple of 4.')
    }
    this.canvas = canvas
    this.options = options || {}
  }

  _read () {
    // For now we're not controlling the c++ code's data emission, so we only
    // call canvas.streamPNGSync once and let it emit data at will.
    this._read = noop

    this.canvas.streamPNGSync((err, chunk, len) => {
      if (err) {
        this.emit('error', err)
      } else if (len) {
        this.push(chunk)
      } else {
        this.push(null)
      }
    }, this.options)
  }
}

module.exports = PNGStream


/***/ }),

/***/ 2391:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const {PassThrough: PassThroughStream} = __nccwpck_require__(2781);
const zlib = __nccwpck_require__(9796);
const mimicResponse = __nccwpck_require__(2610);

const decompressResponse = response => {
	const contentEncoding = (response.headers['content-encoding'] || '').toLowerCase();

	if (!['gzip', 'deflate', 'br'].includes(contentEncoding)) {
		return response;
	}

	const isBrotli = contentEncoding === 'br';
	if (isBrotli && typeof zlib.createBrotliDecompress !== 'function') {
		return response;
	}

	const decompress = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
	const stream = new PassThroughStream();

	mimicResponse(response, stream);

	decompress.on('error', error => {
		// Ignore empty response
		if (error.code === 'Z_BUF_ERROR') {
			stream.end();
			return;
		}

		stream.emit('error', error);
	});

	response.pipe(decompress).pipe(stream);

	return stream;
};

module.exports = decompressResponse;
// TODO: remove this in the next major version
module.exports["default"] = decompressResponse;


/***/ }),

/***/ 1917:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



var loader = __nccwpck_require__(1161);
var dumper = __nccwpck_require__(8866);


function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


module.exports.Type = __nccwpck_require__(6073);
module.exports.Schema = __nccwpck_require__(1082);
module.exports.FAILSAFE_SCHEMA = __nccwpck_require__(8562);
module.exports.JSON_SCHEMA = __nccwpck_require__(1035);
module.exports.CORE_SCHEMA = __nccwpck_require__(2011);
module.exports.DEFAULT_SCHEMA = __nccwpck_require__(8759);
module.exports.load                = loader.load;
module.exports.loadAll             = loader.loadAll;
module.exports.dump                = dumper.dump;
module.exports.YAMLException = __nccwpck_require__(8179);

// Re-export all types in case user wants to create custom schema
module.exports.types = {
  binary:    __nccwpck_require__(7900),
  float:     __nccwpck_require__(2705),
  map:       __nccwpck_require__(6150),
  null:      __nccwpck_require__(721),
  pairs:     __nccwpck_require__(6860),
  set:       __nccwpck_require__(9548),
  timestamp: __nccwpck_require__(9212),
  bool:      __nccwpck_require__(4993),
  int:       __nccwpck_require__(1615),
  merge:     __nccwpck_require__(6104),
  omap:      __nccwpck_require__(9046),
  seq:       __nccwpck_require__(7283),
  str:       __nccwpck_require__(3619)
};

// Removed functions from JS-YAML 3.0.x
module.exports.safeLoad            = renamed('safeLoad', 'load');
module.exports.safeLoadAll         = renamed('safeLoadAll', 'loadAll');
module.exports.safeDump            = renamed('safeDump', 'dump');


/***/ }),

/***/ 6829:
/***/ ((module) => {

"use strict";



function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


module.exports.isNothing      = isNothing;
module.exports.isObject       = isObject;
module.exports.toArray        = toArray;
module.exports.repeat         = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend         = extend;


/***/ }),

/***/ 8866:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*eslint-disable no-use-before-define*/

var common              = __nccwpck_require__(6829);
var YAMLException       = __nccwpck_require__(8179);
var DEFAULT_SCHEMA      = __nccwpck_require__(8759);

var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || DEFAULT_SCHEMA;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string, lineWidth) + '"';
      default:
        throw new YAMLException('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new YAMLException('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new YAMLException('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

module.exports.dump = dump;


/***/ }),

/***/ 8179:
/***/ ((module) => {

"use strict";
// YAML error class. http://stackoverflow.com/questions/8458984
//



function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;


YAMLException.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


module.exports = YAMLException;


/***/ }),

/***/ 1161:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*eslint-disable max-len,no-use-before-define*/

var common              = __nccwpck_require__(6829);
var YAMLException       = __nccwpck_require__(8179);
var makeSnippet         = __nccwpck_require__(6975);
var DEFAULT_SCHEMA      = __nccwpck_require__(8759);


var _hasOwnProperty = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || DEFAULT_SCHEMA;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = makeSnippet(mark);

  return new YAMLException(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty.call(overridableKeys, keyNode) &&
        _hasOwnProperty.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new YAMLException('expected a single document in the stream, but found more');
}


module.exports.loadAll = loadAll;
module.exports.load    = load;


/***/ }),

/***/ 1082:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*eslint-disable max-len*/

var YAMLException = __nccwpck_require__(8179);
var Type          = __nccwpck_require__(6073);


function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema(definition) {
  return this.extend(definition);
}


Schema.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof Type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new YAMLException('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type) {
    if (!(type instanceof Type)) {
      throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type.loadKind && type.loadKind !== 'scalar') {
      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type.multi) {
      throw new YAMLException('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type) {
    if (!(type instanceof Type)) {
      throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


module.exports = Schema;


/***/ }),

/***/ 2011:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.





module.exports = __nccwpck_require__(1035);


/***/ }),

/***/ 8759:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)





module.exports = (__nccwpck_require__(2011).extend)({
  implicit: [
    __nccwpck_require__(9212),
    __nccwpck_require__(6104)
  ],
  explicit: [
    __nccwpck_require__(7900),
    __nccwpck_require__(9046),
    __nccwpck_require__(6860),
    __nccwpck_require__(9548)
  ]
});


/***/ }),

/***/ 8562:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346





var Schema = __nccwpck_require__(1082);


module.exports = new Schema({
  explicit: [
    __nccwpck_require__(3619),
    __nccwpck_require__(7283),
    __nccwpck_require__(6150)
  ]
});


/***/ }),

/***/ 1035:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";
// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.





module.exports = (__nccwpck_require__(8562).extend)({
  implicit: [
    __nccwpck_require__(721),
    __nccwpck_require__(4993),
    __nccwpck_require__(1615),
    __nccwpck_require__(2705)
  ]
});


/***/ }),

/***/ 6975:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";



var common = __nccwpck_require__(6829);


// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


module.exports = makeSnippet;


/***/ }),

/***/ 6073:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var YAMLException = __nccwpck_require__(8179);

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

module.exports = Type;


/***/ }),

/***/ 7900:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


/*eslint-disable no-bitwise*/


var Type = __nccwpck_require__(6073);


// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

module.exports = new Type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});


/***/ }),

/***/ 4993:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

module.exports = new Type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});


/***/ }),

/***/ 2705:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var common = __nccwpck_require__(6829);
var Type   = __nccwpck_require__(6073);

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});


/***/ }),

/***/ 1615:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var common = __nccwpck_require__(6829);
var Type   = __nccwpck_require__(6073);

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});


/***/ }),

/***/ 6150:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

module.exports = new Type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});


/***/ }),

/***/ 6104:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});


/***/ }),

/***/ 721:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

module.exports = new Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});


/***/ }),

/***/ 9046:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});


/***/ }),

/***/ 6860:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

var _toString = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});


/***/ }),

/***/ 7283:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

module.exports = new Type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});


/***/ }),

/***/ 9548:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

module.exports = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});


/***/ }),

/***/ 3619:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

module.exports = new Type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});


/***/ }),

/***/ 9212:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Type = __nccwpck_require__(6073);

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});


/***/ }),

/***/ 2610:
/***/ ((module) => {

"use strict";


// We define these manually to ensure they're always copied
// even if they would move up the prototype chain
// https://nodejs.org/api/http.html#http_class_http_incomingmessage
const knownProperties = [
	'aborted',
	'complete',
	'destroy',
	'headers',
	'httpVersion',
	'httpVersionMinor',
	'httpVersionMajor',
	'method',
	'rawHeaders',
	'rawTrailers',
	'setTimeout',
	'socket',
	'statusCode',
	'statusMessage',
	'trailers',
	'url'
];

module.exports = (fromStream, toStream) => {
	const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));

	for (const property of fromProperties) {
		// Don't overwrite existing properties.
		if (property in toStream) {
			continue;
		}

		toStream[property] = typeof fromStream[property] === 'function' ? fromStream[property].bind(fromStream) : fromStream[property];
	}

	return toStream;
};


/***/ }),

/***/ 1223:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var wrappy = __nccwpck_require__(2940)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 5854:
/***/ ((module) => {

/*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = function (stream, cb) {
  var chunks = []
  stream.on('data', function (chunk) {
    chunks.push(chunk)
  })
  stream.once('end', function () {
    if (cb) cb(null, Buffer.concat(chunks))
    cb = null
  })
  stream.once('error', function (err) {
    if (cb) cb(err)
    cb = null
  })
}


/***/ }),

/***/ 2522:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = simpleGet

const concat = __nccwpck_require__(5854)
const decompressResponse = __nccwpck_require__(2391) // excluded from browser build
const http = __nccwpck_require__(3685)
const https = __nccwpck_require__(5687)
const once = __nccwpck_require__(1223)
const querystring = __nccwpck_require__(3477)
const url = __nccwpck_require__(7310)

const isStream = o => o !== null && typeof o === 'object' && typeof o.pipe === 'function'

function simpleGet (opts, cb) {
  opts = Object.assign({ maxRedirects: 10 }, typeof opts === 'string' ? { url: opts } : opts)
  cb = once(cb)

  if (opts.url) {
    const { hostname, port, protocol, auth, path } = url.parse(opts.url) // eslint-disable-line node/no-deprecated-api
    delete opts.url
    if (!hostname && !port && !protocol && !auth) opts.path = path // Relative redirect
    else Object.assign(opts, { hostname, port, protocol, auth, path }) // Absolute redirect
  }

  const headers = { 'accept-encoding': 'gzip, deflate' }
  if (opts.headers) Object.keys(opts.headers).forEach(k => (headers[k.toLowerCase()] = opts.headers[k]))
  opts.headers = headers

  let body
  if (opts.body) {
    body = opts.json && !isStream(opts.body) ? JSON.stringify(opts.body) : opts.body
  } else if (opts.form) {
    body = typeof opts.form === 'string' ? opts.form : querystring.stringify(opts.form)
    opts.headers['content-type'] = 'application/x-www-form-urlencoded'
  }

  if (body) {
    if (!opts.method) opts.method = 'POST'
    if (!isStream(body)) opts.headers['content-length'] = Buffer.byteLength(body)
    if (opts.json && !opts.form) opts.headers['content-type'] = 'application/json'
  }
  delete opts.body; delete opts.form

  if (opts.json) opts.headers.accept = 'application/json'
  if (opts.method) opts.method = opts.method.toUpperCase()

  const originalHost = opts.hostname // hostname before potential redirect
  const protocol = opts.protocol === 'https:' ? https : http // Support http/https urls
  const req = protocol.request(opts, res => {
    if (opts.followRedirects !== false && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      opts.url = res.headers.location // Follow 3xx redirects
      delete opts.headers.host // Discard `host` header on redirect (see #32)
      res.resume() // Discard response

      const redirectHost = url.parse(opts.url).hostname // eslint-disable-line node/no-deprecated-api
      // If redirected host is different than original host, drop headers to prevent cookie leak (#73)
      if (redirectHost !== null && redirectHost !== originalHost) {
        delete opts.headers.cookie
        delete opts.headers.authorization
      }

      if (opts.method === 'POST' && [301, 302].includes(res.statusCode)) {
        opts.method = 'GET' // On 301/302 redirect, change POST to GET (see #35)
        delete opts.headers['content-length']; delete opts.headers['content-type']
      }

      if (opts.maxRedirects-- === 0) return cb(new Error('too many redirects'))
      else return simpleGet(opts, cb)
    }

    const tryUnzip = typeof decompressResponse === 'function' && opts.method !== 'HEAD'
    cb(null, tryUnzip ? decompressResponse(res) : res)
  })
  req.on('timeout', () => {
    req.abort()
    cb(new Error('Request timed out'))
  })
  req.on('error', cb)

  if (isStream(body)) body.on('error', cb).pipe(req)
  else req.end(body)

  return req
}

simpleGet.concat = (opts, cb) => {
  return simpleGet(opts, (err, res) => {
    if (err) return cb(err)
    concat(res, (err, data) => {
      if (err) return cb(err)
      if (opts.json) {
        try {
          data = JSON.parse(data.toString())
        } catch (err) {
          return cb(err, res, data)
        }
      }
      cb(null, res, data)
    })
  })
}

;['get', 'post', 'put', 'patch', 'head', 'delete'].forEach(method => {
  simpleGet[method] = (opts, cb) => {
    if (typeof opts === 'string') opts = { url: opts }
    return simpleGet(Object.assign({ method: method.toUpperCase() }, opts), cb)
  }
})


/***/ }),

/***/ 4294:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(4219);


/***/ }),

/***/ 4219:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(1808);
var tls = __nccwpck_require__(4404);
var http = __nccwpck_require__(3685);
var https = __nccwpck_require__(5687);
var events = __nccwpck_require__(2361);
var assert = __nccwpck_require__(9491);
var util = __nccwpck_require__(3837);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 5840:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function () {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function () {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function () {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function () {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function () {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function () {
    return _version.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function () {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function () {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function () {
    return _parse.default;
  }
}));

var _v = _interopRequireDefault(__nccwpck_require__(8628));

var _v2 = _interopRequireDefault(__nccwpck_require__(6409));

var _v3 = _interopRequireDefault(__nccwpck_require__(5122));

var _v4 = _interopRequireDefault(__nccwpck_require__(9120));

var _nil = _interopRequireDefault(__nccwpck_require__(5332));

var _version = _interopRequireDefault(__nccwpck_require__(1595));

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

var _parse = _interopRequireDefault(__nccwpck_require__(2746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 4569:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(6113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function md5(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('md5').update(bytes).digest();
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ 5332:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ 814:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;

var _crypto = _interopRequireDefault(__nccwpck_require__(6113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;

function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    _crypto.default.randomFillSync(rnds8Pool);

    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ }),

/***/ 5274:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _crypto = _interopRequireDefault(__nccwpck_require__(6113));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sha1(bytes) {
  if (Array.isArray(bytes)) {
    bytes = Buffer.from(bytes);
  } else if (typeof bytes === 'string') {
    bytes = Buffer.from(bytes, 'utf8');
  }

  return _crypto.default.createHash('sha1').update(bytes).digest();
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ 8950:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ 8628:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.default)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ 6409:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(5998));

var _md = _interopRequireDefault(__nccwpck_require__(4569));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ 5998:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;
exports.URL = exports.DNS = void 0;

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

var _parse = _interopRequireDefault(__nccwpck_require__(2746));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function _default(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.default)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 5122:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__nccwpck_require__(807));

var _stringify = _interopRequireDefault(__nccwpck_require__(8950));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.default)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ 9120:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__nccwpck_require__(5998));

var _sha = _interopRequireDefault(__nccwpck_require__(5274));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ 6900:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__nccwpck_require__(814));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ 1595:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__nccwpck_require__(6900));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),

/***/ 2940:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 3756:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = require(__nccwpck_require__.ab + "build/Release/canvas.node")

/***/ }),

/***/ 9491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 1808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 3477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 2781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 8392:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"canvas","description":"Canvas graphics API backed by Cairo","version":"2.11.0","author":"TJ Holowaychuk <tj@learnboost.com>","main":"index.js","browser":"browser.js","contributors":["Nathan Rajlich <nathan@tootallnate.net>","Rod Vagg <r@va.gg>","Juriy Zaytsev <kangax@gmail.com>"],"keywords":["canvas","graphic","graphics","pixman","cairo","image","images","pdf"],"homepage":"https://github.com/Automattic/node-canvas","repository":"git://github.com/Automattic/node-canvas.git","scripts":{"prebenchmark":"node-gyp build","benchmark":"node benchmarks/run.js","lint":"standard examples/*.js test/server.js test/public/*.js benchmarks/run.js lib/context2d.js util/has_lib.js browser.js index.js","test":"mocha test/*.test.js","pretest-server":"node-gyp build","test-server":"node test/server.js","generate-wpt":"node ./test/wpt/generate.js","test-wpt":"mocha test/wpt/generated/*.js","install":"node-pre-gyp install --fallback-to-build --update-binary","dtslint":"dtslint types"},"binary":{"module_name":"canvas","module_path":"build/Release","host":"https://github.com/Automattic/node-canvas/releases/download/","remote_path":"v{version}","package_name":"{module_name}-v{version}-{node_abi}-{platform}-{libc}-{arch}.tar.gz"},"files":["binding.gyp","lib/","src/","util/","types/index.d.ts"],"types":"types/index.d.ts","dependencies":{"@mapbox/node-pre-gyp":"^1.0.0","nan":"^2.17.0","simple-get":"^3.0.3"},"devDependencies":{"@types/node":"^10.12.18","assert-rejects":"^1.0.0","dtslint":"^4.0.7","express":"^4.16.3","js-yaml":"^4.1.0","mocha":"^5.2.0","pixelmatch":"^4.0.2","standard":"^12.0.1","typescript":"^4.2.2"},"engines":{"node":">=6"},"license":"MIT"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(3109);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map