import React from 'react';
import './about.scss';
import { Button, Box } from '@mui/material';
import homepage from './assets/homepage.jpg';
import { index } from 'd3';
const Documentation = () => {
  return (
    <div className='doc-container'>
      <div>
        <br /> <br />
        <h1 className='docs-title'>Welcome to VisiQL</h1>
      </div>
      <div>
        <h2 className='intro-paragraph'>
          <div className='visiql-statement'>
            <br /> <br />
            VisiQL was created by a small team of engineers who are passionate
            about encouraging other developers to get started with using
            GraphQL’s powerful abilities in their own projects.
          </div>
          <br /> <br />
          <img className='img' src={homepage} />
          <br /> <br />
          <Box textAlign='center'>
            <Button
              href='https://github.com/oslabs-beta/VisiQL'
              id='submit-button'
              variant='contained'
              sx={{
                backgroundColor: '#ed6a5a',
                ':hover': { backgroundColor: '#f1887b' },
                width: '25%',
                height: '4rem',
              }}
            >
              {' '}
              Get VisiQL{' '}
            </Button>
          </Box>
          <br /> <br /> GraphQL is a query language for APIs that allows for
          engineers to customize their requests to ensure the data delivered is
          exactly what they need for their projects and nothing more. VisiQL
          accomplishes this by abstracting away the heavy lifting of creating
          the necessary schemas and resolvers for querying PostgreSQL databases
          with GraphQL and providing sophisticated visualization tools to allow
          developers to easily customize and add to VisiQL’s generated code to
          save time setting up the rest of their queries. <br /> <br /> Getting
          started with VisiQL is easy. Simply start by signing into your
          account. If you don’t have an account yet, you can either create one,
          or continue using VisiQL as a guest. Note that if you do choose to
          create an account, you will also have the ability to save and edit
          your projects so that you can revisit your projects for any new
          requirements that may come up throughout your development process.
          <br />
          <br />
        </h2>
        <div className='generating-docs'>
          <div className='generating-docs-title'>
            Generating your GraphQL Code
          </div>
          <br />
          <h2 className='generating-docs'>
            Upon logging in or continuing as a guest, enter your desired
            PostgreSQL database link in the textbox and click submit. Note that
            at this time, VisiQL was created to only support generating code for
            PostgreSQL databases, but we welcome the Open Source community to
            add support for additional database types.
            <br />
            <br />
            Upon submission, you will see your database visualization and
            GraphQL schema generated and displayed instantly. Toggle on the left
            hand side between the schema and resolvers tabs to review the code,
            or click the open button on the code editor to see both the
            generated schema and resolver in one view.
            <br />
            <br />
          </h2>
        </div>
        <div className='generating-docs'>
          <div className='generating-docs-title'>Visualize your Database</div>
          <h2 className='generating-docs'>
            <br />
            On the right hand side, you will see a tree graph generated from
            your PostgreSQL database. Click on the nodes to collapse and expand
            the table data and focus on only one part of your database.
            <br />
            <br />
            Or, use your trackpad or mouse to zoom in on your tree graph,
            clicking and dragging to view different parts of your database in
            finer detail.
            <br />
            <br />
            Hover over foreign keys to highlight relationships with primary keys
            and associated table data.
            <br />
            <br />
            If you need a bigger space to work with your database visualization,
            click the open button on the bottom right side of the visualizer
            panel. The same zoom, pan, and highlighting functionality is
            available in this larger view.
            <br />
            <br />
          </h2>
        </div>
        <div className='generating-docs'>
          <div className='generating-docs-title'>Projects Page</div>
          <h2 className='generating-docs'>
            <br />
            On the Projects page, you will find a table with information about
            your saved projects. There are columns for the project name, the
            date it was most recently updated, and buttons for viewing or
            deleting the projects. Projects can be ordered alphabetically by
            Project Name, or by the date they were Last Updated.
            <br />
            <br />
            For users that are signed in, you will have the ability to save your
            projects to your projects folder.
            <br />
            <br />
            While a saved project is loaded to the Home page, clicking the
            ‘Update Project’ icon from the toolbar will open a popover with a
            field for optionally changing the name of your project. Click
            ‘UPDATE’ to save your changes to the database. A popover will alert
            you of a successful update.
            <br />
            <br />
            On the projects page, clicking the ‘Delete Project’ button will
            prompt you to confirm the deletion of the associated project. A
            popover will notify you of a successful deletion.
            <br />
            <br />
            If logged in, clicking the ‘View Projects’ folder icon from the
            toolbar will navigate to the Projects page.
            <br />
            <br />
          </h2>
        </div>
        <div className='generating-docs'>
          <div className='generating-docs-title'>GraphiQL Playground</div>
          <h2 className='generating-docs'>
            <br />
            Our team has built a direct integration with GraphiQL into our
            application. When you first access our application, an Apollo Server
            will automatically load demo data from the Star Wars API into the
            GraphiQL Playground.
            <br />
            <br />
            In order to have a server spun up using your own database data, edit
            the data in the following files in your forked repository of VisiQL
            (hint: you can generate the code you need using VisiQL!) -
            resolvers.js, schema.js, and starwarsModel.js. Upon relaunch of the
            app, your GraphiQL Playground will be ready for querying with your
            inputted data.
            <br />
            <br />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
