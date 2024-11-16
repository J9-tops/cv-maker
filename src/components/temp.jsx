{
  fullPage ? (
    <>
      <Navbar
        showResult={showResult}
        setShowResult={setShowResult}
        handleShowResultToggle={handleShowResultToggle}
        userData={userData}
        setUserData={setUserData}
        setEducationData={setEducationData}
        educationData={educationData}
        handleEducationDataCount={handleEducationDataCount}
      />
      <FinalResult userData={userData} educationData={educationData} />
    </>
  ) : (
    <>
      {showResult ? (
        <FinalResult userData={userData} educationData={educationData} />
      ) : (
        <Navbar
          showResult={showResult}
          setShowResult={setShowResult}
          handleShowResultToggle={handleShowResultToggle}
          userData={userData}
          setUserData={setUserData}
          setEducationData={setEducationData}
          educationData={educationData}
          handleEducationDataCount={handleEducationDataCount}
        />
      )}
      <ShowResult
        showResult={showResult}
        handleShowResultToggle={handleShowResultToggle}
      />
    </>
  );
}
