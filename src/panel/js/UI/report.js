class Suite{

    /**
     * @return mixed
     */
    getName()
    {
        return this.name;
    }

    /**
     * @param name
     */
    setName(name)
    {
        this.name = name;
    }

    /**
     * @return mixed
     */
    getFeatures()
    {
        return this.features;
    }

    /**
     * @param features
     */
    setFeatures(features)
    {
        this.features = features;
    }

    addFeature(feature)
    {
        this.features.concat(feature);
    }
}

class Feature{
    getName()
    {
        return this.name;
    }

    /**
     * @param name
     */
    setName(name)
    {
        this.name = name;
    }

    /**
     * @return mixed
     */
    getDescription()
    {
        return this.description;
    }

    /**
     * @param description
     */
    setDescription(description)
    {
        this.description = description;
    }

    /**
     * @return mixed
     */
    getTags()
    {
        return this.tags;
    }

    /**
     * @param tags
     */
    setTags(tags)
    {
        this.tags = tags;
    }

    /**
     * @return mixed
     */
    getFile()
    {
        return this.file;
    }



    /**
     * @param file
     */
    setFile(file)
    {
        this.file = file;
    }

    /**
     * @return mixed
     */
    getScreenshotFolder()
    {
        return this.screenshotFolder;
    }

    /**
     * @param featureName
     */
    setScreenshotFolder(featureName)
    {
        this.screenshotFolder = str_replace(' ','', featureName);
    }

    /**
     * @return Scenario[]
     */
    getScenarios()
    {
        return this.scenarios;
    }

    /**
     * @param scenarios
     */
    ơsetScenarios(scenarios)
    {
        this.scenarios = scenarios;
    }

    /**
     * @param scenario
     */
    addScenario(scenario)
    {
        scenario.setId(this.scenarioCounter);
        this.scenarioCounter++;
        this.scenarios.concat(scenario);
    }

    /**
     * @return mixed
     */
    getFailedScenarios()
    {
        return this.failedScenarios;
    }

    /**
     * @param failedScenarios
     */
    setFailedScenarios(failedScenarios)
    {
        this.failedScenarios = failedScenarios;
    }

    addFailedScenario()
    {
        this.failedScenarios++;
    }

    /**
     * @return mixed
     */
    getPassedScenarios()
    {
        return this.passedScenarios;
    }

    /**
     * @param passedScenarios
     */
    setPassedScenarios(passedScenarios)
    {
        this.passedScenarios = passedScenarios;
    }

    addPassedScenario()
    {
        this.passedScenarios++;
    }

    /**
     * @return mixed
     */
    getId()
    {
        return this.id;
    }

    /**
     * @param id
     */
    setId(id)
    {
        this.id = id;
    }


    allPassed()
    {
        if(this.failedScenarios === 0) {
            return true;
        }
        return false;
    }

    getPassedClass()
    {
        if (allPassed()) {
            return "success";
        }
        return "failed";
    }

    getPercentPassed()
    {
        return (this.getPassedScenarios() / (this.getTotalAmountOfScenarios())) * 100;
    }

    getPercentFailed()
    {
        return (this.getFailedScenarios() / (this.getTotalAmountOfScenarios())) * 100;
    }

    getTotalAmountOfScenarios()
    {
        return this.getPassedScenarios() + this.getFailedScenarios();
    }

}