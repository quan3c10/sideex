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
        this.features.push(feature);
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
        //this.screenshotFolder = str_replace(' ','', featureName);
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
    setScenarios(scenarios)
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
        this.scenarios.push(scenario);
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

class Scenario{

    getName()
    {
        return this.name;
    }


    setName(name)
    {
        this.name = name;
    }

    getScreenshotName()
    {
        return this.screenshotName;
    }

    setScreenshotName(scenarioName)
    {
        //this.screenshotName = str_replace(' ','', $scenarioName) . '.png';
    }

    /**
     * @return int
     */
    getLoopCount()
    {
        return this.loopCount;
    }

    /**
     * @param loopCount
     */
    setLoopCount(loopCount)
    {
        this.loopCount = loopCount;
    }
    /**
     * @return mixed
     */
    getLine()
    {
        return this.line;
    }

    /**
     * @param line
     */
    setLine(line)
    {
        this.line = line;
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
     * @return boolean
     */
    isPassed()
    {
        return this.passed;
    }

    /**
     * @param passed
     */
    setPassed(passed)
    {
        this.passed = passed;
    }

    /**
     * @return Step[]
     */
    getSteps()
    {
        return this.steps;
    }

    /**
     * @param steps
     */
    setSteps(steps)
    {
        this.steps = steps;
    }

    /**
     * @param step
     */
    addStep(step)
    {
        this.steps.push(step);
    }

    /**
     * @return int
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

    getLoopSize()
    {
        //behat
        return this.loopCount > 0 ? sizeof(this.steps)/this.loopCount : sizeof(this.steps);
    }
}

class Steps{

    setScreenshot(screenshot){
        this.screenshot = screenshot;
    }

    /**
     * @return string
     */
    getScreenshot(){
        return this.screenshot;
    }

    /**
     * @return mixed
     */
    getKeyword()
    {
        return this.keyword;
    }

    /**
     * @param keyword
     */
    setKeyword(keyword)
    {
        this.keyword = keyword;
    }

    /**
     * @return mixed
     */
    getText()
    {
        return this.text;
    }

    /**
     * @param text
     */
    setText(text)
    {
        this.text = text;
    }

    /**
     * @return mixed
     */
    getArguments()
    {
        return this.arguments;
    }

    /**
     * @param _arguments
     */
    setArguments(_arguments)
    {
        this.arguments = _arguments;
    }

    /**
     * @return mixed
     */
    getLine()
    {
        return this.line;
    }

    /**
     * @param line
     */
    setLine(line)
    {
        this.line = line;
    }

    /**
     * @return mixed
     */
    getResult()
    {
        return this.result;
    }

    /**
     * @param result
     */
    setResult(result)
    {
        this.result = result;
    }

    /**
     * @return mixed
     */
    getException()
    {
        return this.exception;
    }

    /**
     * @param exception
     */
    setException(exception)
    {
        this.exception = exception;
    }

    /**
     * @return mixed
     */
    getDefinition()
    {
        return this.definition;
    }

    /**
     * @param definition
     */
    setDefinition(definition)
    {
        this.definition = definition;
    }

    /**
     * @return mixed
     */
    getOutput()
    {
        return this.output;
    }

    /**
     * @param output
     */
    setOutput(output)
    {
        this.output = output;
    }

    /**
     * @return mixed
     */
    getResultCode()
    {
        return this.resultCode;
    }

    /**
     * @param resultCode
     */
    setResultCode(resultCode)
    {
        this.resultCode = resultCode;
    }

    /**
     * @return boolean
     */
    isPassed()
    {
        return this.resultCode === 'PASSED';
    }

    /**
     * @return boolean
     */
    isSkipped()
    {
        return this.resultCode === 'SKIPPED';
    }

    /**
     * @return boolean
     */
    isPending()
    {
        return (this.resultCode === 'PENDING' || this.resultCode === 'UNDEFINED');
    }

    /**
     * @return boolean
     */
    isFailed()
    {
        return this.resultCode === 'FAILED';
    }
}