<?php

  namespace App\Http\Controllers;

  use App\Http\Resources\SpeakerResource;
  use App\Models\Speaker;
  use Artesaos\SEOTools\Facades\SEOTools;
  use Illuminate\Http\Request;
  use Inertia\Inertia;

  class PagesController extends Controller
  {

/**
       * Display the terms and conditions page.
       *
       * This method renders the 'TermsConditions' view.
       *
       * @return \Inertia\Response The response instance containing the rendered terms and conditions page.
       */
      public function terms()
      {
        return Inertia::render('TermsConditions');
      }

      /**
       * Display the privacy policy page.
       *
       * This method renders the 'PrivacyPolicy' view.
       *
       * @return \Inertia\Response The response instance containing the rendered privacy policy page.
       */
      public function privacy()
      {
        return Inertia::render('PrivacyPolicy');
      }

      /**
       * Display the refund policy page.
       *
       * This method renders the 'RefundPolicy' view.
       *
       * @return \Inertia\Response The response instance containing the rendered refund policy page.
       */
      public function policy()
      {
        return Inertia::render('RefundPolicy');
      }

      /**
       * Display the contact page.
       *
       * This method retrieves the specified speaker from the database
       * and renders the 'Contact/Index' view with the retrieved data.
       *
       * @param \Illuminate\Http\Request $request The request instance containing the speaker slug.
       * @return \Inertia\Response The response instance containing the rendered contact page.
       */
      public function contact(Request $request)
      {
        // Retrieve the speaker based on the provided slug
        $speaker = Speaker::where('slug', $request->speaker)->first();

        // Render the contact page with the retrieved speaker data
        return Inertia::render('Contact/Index', [
          'speaker' => $speaker ? new SpeakerResource($speaker) : null
        ]);
      }


    /**
     * Display the user profile page.
     *
     * This method renders the ' Profile landing page' view.
     *
     * @return \Illuminate\View\View The view instance containing the rendered profile page.
     */
    public function profile()
    {
      return view('pages.profile');
    }


    /**
     * Display the thank you page after contact form submission.
     *
     * This method renders the 'Contact/ThankYou' view.
     *
     * @return \Inertia\Response The response instance containing the rendered thank you page.
     */
    public function thanks()
    {
      return Inertia::render("Contact/ThankYou");
    }


    /**
     * Display the user profile page in Arabic.
     *
     * This method renders the 'pages.profile-arabic' view.
     *
     * @return \Illuminate\View\View The view instance containing the rendered profile page in Arabic.
     */
    public function profileArabic()
    {
      return view('pages.profile-arabic');
    }


    /**
     * Display the about page.
     *
     * This method sets the SEO title and description for the about page
     * and renders the 'About/Index' view.
     *
     * @return \Inertia\Response The response instance containing the rendered about page.
     */
    public function about()
    {
      // Set the SEO title for the about page
      SEOTools::setTitle('About Us - MENA Speakers');

      // Set the SEO description for the about page
      SEOTools::setDescription(" We provide premier public speakers, MCs, and corporate trainers. We are a one-stop solution for all your event needs. Get a speaker in 5 minutes.");

      // Render the about page
      return Inertia::render('About/Index');
    }
  }
