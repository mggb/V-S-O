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

    /**
     * @Route("/valid", name="valid")
     */
    public function valid()
    {
        return $this->render('visaFelicitation.html.twig', [
            'controller_name' => 'VisaController',
        ]);
    }
}
