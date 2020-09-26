<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/")
 */
class HomeController extends AbstractController
{

  /**
   * @Route("/", name="home_index")
   */
  public function new(Request $request)
  {
    return $this->render('home/index.html.twig', []);
  }
}
