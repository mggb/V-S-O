<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class VisaController extends Controller
{
    /**
     * @Route("/visa", name="visa")
     */
    public function index()
    {
        return $this->render('demandeVisa.html.twig', [
            'controller_name' => 'VisaController',
        ]);
    }
}
