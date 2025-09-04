# Changelog

# Version 1.0.1 (2025-03-23)

**Summary:** This patch release addresses a critical operational issue involving the deletion and recreation of the repository, followed by a backend restart. It restores the API's functionality to its state in v1.0.0.

**Key Changes:**

* **Repository Restoration:**
    * The repository was deleted and recreated due to unforeseen errors.
* **Backend Restart:**
    * The backend services have been restarted to ensure API functionality.
* **Functional Restoration:**
    * The API now operates as it did in version 1.0.0.

**Note:**

* This release does *not* introduce any new features or changes to the API's structure or data.
* All functionality and data remain identical to version 1.0.0.
* Please refer to the 1.0.0 release notes for information on the api's functionality.

**Impact:**

* Users who experienced API downtime due to the repository issue should find the API fully functional again.
* No code changes are required for users who already integrated v1.0.0.

**Previous Release Notes (v1.0.0):**

For details on the API's features and structure, please refer to the [v1.0.0 Changelog](https://github.com/Sudhanshu-Ambastha/Pokemon-3D-api/blob/main/docs/CHANGELOG.md)

---

## Version 1.0.0 (22/03/2025) - Major API Update and Model Overhaul

This release introduces a major update to the Pokémon 3D API, including breaking changes to the JSON response structure, significant model additions, and a comprehensive overhaul of the documentation.

### Breaking API Changes
**Important:** The API now returns Pokémon data in a new nested structure. Please update your applications to use the following JSON format:

```json
{
  "pokemon": [
    {
      "id": 1,
      "forms": [
        {
          "name": "Bulbasaur",
          "model": "https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/1.glb",
          "formName": "regular"
        },
        {
          "name": "Shiny Bulbasaur",
          "model": "https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/1.glb",
          "formName": "shiny"
        }
      ]
    },
  // ... more Pokémon objects
]
```

**Migration Guidance:** If your application relies on the previous API structure, you will need to update your code to parse this new format. Pay close attention to the forms array, which now contains objects for each Pokémon's different forms (regular, shiny, etc.).

**Comprehensive Documentation Overhaul**: The documentation has been completely rewritten to reflect the new API structure and provide more detailed explanations and examples.

### Documentation Updates
The documentation has been significantly updated to reflect the new API structure and provide more comprehensive information. Key changes include:
- Clearer explanations of the API endpoint and JSON response structure.
- Updated Pokémon category and count information.
- For a practical example of how to use this API, please review the `opt.html` file. This page uses the updated API to display the optimized models.

---
## v0.2.1 - Optimized Models Implementation and Documentation (2025-03-15)

### **Implementation Change:**

* **Optimized Model Pathing:**
    * Changed the JSON file paths to point to the optimized `.glb` models instead of the original, non-optimized versions.
    * This ensures that the application now serves the optimized models by default, resulting in improved performance.
    * You can preview the differences directly on the deployed site by switching between the optimized and non-optimized model views.

### **Enhancements:**

* **Optimization Documentation:**
    * Added comprehensive documentation on optimizing 3D models using `gltf-transform`.
    * Provided clear instructions on the recommended optimization settings (1024x1024 resolution, Draco compression, WebP textures) and the CLI command.
    * Included guidance on where to apply optimization and how to update JSON file paths.
    * Added a link to the `gltf-transform` CLI documentation for further reference: [gltf-transform](https://gltf-transform.dev/cli).

### **Version Release Notes:**

This release focuses on implementing optimized models by default and enhancing the documentation with detailed optimization guidelines. The implementation change ensures that all models load with improved performance, while the optimization documentation empowers developers to further optimize models effectively.

---

## v0.2.0 - Automated JSX Model Components (2025-02-23)

### **Enhancements & Fixes:**

* **Automated JSX Model Generation:**
    * Implemented a GitHub Actions workflow to automatically convert `.glb` models into optimized JSX components using `gltfjsx`.
    * This significantly simplifies the integration of 3D models into React and Next.js projects, allowing for direct component imports.
* **Improved React/Next.js Compatibility:**
    * Models are now available as ready-to-use JSX components, streamlining the development process for React and Next.js users.
    * This eliminates the need for manual `.glb` handling within these frameworks.
* **Updated Project Structure:**
    * Organized models into separate `glb` and `gltfjsx` directories for better project management.
* **Pathing Improvements:**
    * Ensured that the component paths are correctly set.
* **JSON Updates:**
    * Updated the JSON to correctly set the component name to match the file name.

### **Important Notes:**

* While this release automates the generation of JSX components, please note that not all models are currently available in this format. We are actively working to expand the model library.
* The GLB files are still hosted on githubusercontent.
* The github actions will automatically convert any new glb files that are added.
* Please ensure that you are using the correct component name from the json file.

### **Future Plans:**

* Continue to expand the library of available JSX model components.
* Further optimize the model-loading pipeline for enhanced performance.
* Improve documentation and examples for integrating models into React and Next.js projects.
* Add more pokemon models.

---

## v0.1.0 (2025-02-09)

This is the initial release of the Pokemon 3D API!  This API allows users to fetch 3D GLB models of Pokemon, with support for various forms.

**Features:**

* **3D Model Retrieval:** The API allows users to fetch 3D GLB models of Pokemon.
* **Supported Forms:** The following Pokemon forms are currently supported:
    * Regular Forms: Generations 1-6 (inclusive)
    * Hisuian Forms: All available Hisuian forms
    * Primal Forms: All available Primal forms
    * Origin Forms: All available Origin forms
    * Mega Evolutions: All Mega Evolutions *except* Manectric
    * XY Forms: All XY forms
* **Search and Filtering:** Basic search and filtering functionality is implemented, as demonstrated in the included `example.html` file.
* **Up-to-date Dependencies:** All dependencies and libraries have been updated to their latest versions.
* **Documentation:** Basic documentation is available via Postman: [https://documenter.getpostman.com/view/29725199/2sAYX8KMU8](https://documenter.getpostman.com/view/29725199/2sAYX8KMU8)

**Known Issues/Limitations:**

* **Incomplete Form Support:**  Shiny forms, Gigantamax forms, and other special forms are currently under development and not yet available.
* **Animated Models:** While many models are animated, not all models have animations.  Game-ready models are prioritized.
* **Model Availability:**  Not all Pokemon forms have 3D models available at this time. We are working to expand the model library.

**Future Plans:**

* We plan to add support for all remaining Pokemon forms, including Shiny, Gigantamax, and others.
* We will continue to expand the library of 3D models and animations.
* Further improvements to search and filtering are planned.
* We will continue to update the API to ensure it remains up-to-date with the latest versions of all dependencies.
