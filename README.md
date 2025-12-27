# mpbarbosa.com - Staging Repository

> **Repository Role**: Production staging area for MP Barbosa's personal website
> 
> **Architecture**: Receives deployable assets from `mpbarbosa_site` source repository

## Purpose

This repository serves as the **staging environment** for mpbarbosa.com website before production deployment. It contains:

- Compiled/processed web assets from the main `mpbarbosa_site` repository
- All sibling project deployments (Music in Numbers, Guia Turístico, Monitora Vagas, Busca Vagas)
- Production-ready HTML, CSS, JavaScript, and static assets
- Complete web server directory structure

## Architecture

```
mpbarbosa_site/          (Source repository - development)
    └── src/             (Main site source files)
         ↓
    [sync_to_staging.sh]  (Deployment script)
         ↓
mpbarbosa.com/           (This repository - staging)
    ├── index.html       (Processed main page)
    ├── assets/          (HTML5 UP Dimension template)
    ├── images/          (Optimized images)
    ├── music_in_numbers/    (Spotify analytics sibling project)
    ├── guia_turistico/      (Travel guide sibling project)
    ├── monitora_vagas/      (Hotel monitoring sibling project)
    └── busca_vagas/         (API backend sibling project)
         ↓
    [deploy_to_webserver.sh]  (Production deployment)
         ↓
/var/www/html/           (Production web server)
```

## Deployment Workflow

### Step 1: Source → Staging
```bash
# From mpbarbosa_site repository
./shell_scripts/sync_to_staging.sh --step1 --verbose
```

### Step 2: Staging → Production
```bash
# From mpbarbosa_site repository
./shell_scripts/sync_to_staging.sh --step2 --production-dir /var/www/html
```

### Combined Deployment
```bash
# Both steps in one command
./shell_scripts/sync_to_staging.sh --both-steps
```

## Version Control Strategy

- **Commits**: Automatic timestamped commits when staging files
- **Branches**: `main` branch tracks production-ready assets
- **Tags**: Version tags for major releases
- **History**: Full deployment history for rollback capability

## Relationship to mpbarbosa_site

| Repository | Role | Contents |
|------------|------|----------|
| `mpbarbosa_site` | Source/Development | Raw source files, development tools, build scripts |
| `mpbarbosa.com` | Staging | Processed web assets ready for production |
| Production Server | Deployment | Live website served to public |

## DO NOT Edit Files Directly

⚠️ **Warning**: Files in this repository are generated automatically from `mpbarbosa_site`. 

- Do not manually edit files here
- All changes should be made in the source repository
- Re-run deployment scripts to sync changes

## Sibling Projects

This repository includes four sibling projects deployed at top level:

1. **Music in Numbers** (`music_in_numbers/`) - Spotify analytics visualization
2. **Guia Turístico** (`guia_turistico/`) - Tourism guide application  
3. **Monitora Vagas** (`monitora_vagas/`) - AFPESP hotel vacancy monitoring
4. **Busca Vagas** (`busca_vagas/`) - Backend API service with Node.js/Express

Each project maintains its complete directory structure and assets.

## License

See individual project files for licensing information.

---

**Last Updated**: December 27, 2025  
**Maintained By**: MP Barbosa
